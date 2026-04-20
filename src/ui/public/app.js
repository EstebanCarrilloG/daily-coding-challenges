const monthToNumber = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12,
};

const monthToLabel = {
  january: "January",
  february: "February",
  march: "March",
  april: "April",
  may: "May",
  june: "June",
  july: "July",
  august: "August",
  september: "September",
  october: "October",
  november: "November",
  december: "December",
};

const state = {
  catalog: null,
  selectedYear: null,
  selectedMonth: "",
  selectedDay: null,
};

const yearSelect = document.querySelector("#yearSelect");
const monthSelect = document.querySelector("#monthSelect");
const refreshButton = document.querySelector("#refreshButton");
const calendarTitle = document.querySelector("#calendarTitle");
const calendarSubtitle = document.querySelector("#calendarSubtitle");
const calendarGrid = document.querySelector("#calendarGrid");
const solutionTitle = document.querySelector("#solutionTitle");
const solutionMeta = document.querySelector("#solutionMeta");
const solutionCode = document.querySelector("#solutionCode");

function getYearData() {
  if (!state.catalog) return null;
  return (
    state.catalog.years.find((yearItem) => yearItem.year === Number(state.selectedYear)) || null
  );
}

function getMonthData() {
  const yearData = getYearData();
  if (!yearData) return null;
  return yearData.months.find((monthItem) => monthItem.id === state.selectedMonth) || null;
}

function getLatestMonthWithChallenges(yearData) {
  if (!yearData || !yearData.months.length) return "";

  const reversed = [...yearData.months].reverse();
  const monthWithChallenges = reversed.find((month) => month.challengeDays.length > 0);
  return monthWithChallenges ? monthWithChallenges.id : reversed[0].id;
}

function getLatestYearWithChallenges() {
  if (!state.catalog || !state.catalog.years.length) return null;

  const reversedYears = [...state.catalog.years].reverse();
  const yearWithChallenges = reversedYears.find((yearItem) =>
    yearItem.months.some((month) => month.challengeDays.length > 0),
  );

  return yearWithChallenges ? yearWithChallenges.year : reversedYears[0].year;
}

function setInitialSelection() {
  if (!state.catalog || !state.catalog.years.length) return;

  state.selectedYear = getLatestYearWithChallenges();

  const yearData = getYearData();
  state.selectedMonth = getLatestMonthWithChallenges(yearData);

  const monthData = getMonthData();
  state.selectedDay = monthData?.challengeDays[0] ?? null;
}

function renderYearSelect() {
  if (!state.catalog) return;

  yearSelect.innerHTML = "";
  state.catalog.years.forEach((yearItem) => {
    const option = document.createElement("option");
    option.value = String(yearItem.year);
    option.textContent = String(yearItem.year);
    option.selected = Number(option.value) === Number(state.selectedYear);
    yearSelect.append(option);
  });
}

function renderMonthSelect() {
  monthSelect.innerHTML = "";

  const yearData = getYearData();
  if (!yearData) return;

  yearData.months.forEach((monthItem) => {
    const option = document.createElement("option");
    option.value = monthItem.id;
    option.textContent = monthToLabel[monthItem.id] || monthItem.label;
    option.selected = option.value === state.selectedMonth;
    monthSelect.append(option);
  });
}

function createDayCell(index, day, monthData, availableDaySet) {
  const cell = document.createElement("div");
  cell.className = "day-cell";
  cell.style.setProperty("--index", String(index));

  if (day === null) {
    cell.classList.add("empty");
    return cell;
  }

  const button = document.createElement("button");
  button.className = "day-button";
  button.type = "button";
  button.textContent = String(day);

  const hasChallenge = availableDaySet.has(day);
  if (hasChallenge) {
    cell.classList.add("has-challenge");
    button.title = "View solution";
  } else {
    button.title = "No solution for this day";
  }

  if (Number(state.selectedDay) === day) {
    cell.classList.add("selected");
  }

  button.addEventListener("click", async () => {
    state.selectedDay = day;
    renderCalendar();

    if (!hasChallenge) {
      showNoChallengeMessage(day, monthData);
      return;
    }

    await loadSolution(day);
  });

  cell.append(button);
  return cell;
}

function showNoChallengeMessage(day, monthData) {
  const monthName = monthToLabel[monthData.id] || monthData.label;
  solutionTitle.textContent = `Day ${String(day).padStart(2, "0")} has no solution yet`;
  solutionMeta.textContent = `${monthName} ${state.selectedYear} has no saved solution for this day.`;
  solutionCode.textContent = "// No solution for this day";
}

function renderCalendar() {
  const monthData = getMonthData();
  if (!monthData) {
    calendarTitle.textContent = "Calendar";
    calendarSubtitle.textContent = "No data available";
    calendarGrid.innerHTML = "";
    return;
  }

  const monthName = monthToLabel[monthData.id] || monthData.label;
  calendarTitle.textContent = `${monthName} ${state.selectedYear}`;
  calendarSubtitle.textContent = `${monthData.challengeDays.length} days with saved solutions`;

  const monthNumber = monthToNumber[monthData.id];
  const firstWeekDay = new Date(Number(state.selectedYear), monthNumber - 1, 1).getDay();
  const totalDays = monthData.daysInMonth;

  calendarGrid.innerHTML = "";
  const availableDaySet = new Set(monthData.challengeDays);

  const cells = [];

  for (let offset = 0; offset < firstWeekDay; offset += 1) {
    cells.push(null);
  }

  for (let day = 1; day <= totalDays; day += 1) {
    cells.push(day);
  }

  const rows = Math.ceil(cells.length / 7);
  const totalCells = rows * 7;
  while (cells.length < totalCells) {
    cells.push(null);
  }

  cells.forEach((day, index) => {
    const cell = createDayCell(index, day, monthData, availableDaySet);
    calendarGrid.append(cell);
  });
}

async function loadSolution(day) {
  const monthData = getMonthData();
  if (!monthData) return;

  const params = new URLSearchParams({
    year: String(state.selectedYear),
    month: state.selectedMonth,
    day: String(day),
  });

  try {
    const response = await fetch(`/api/solution?${params.toString()}`);
    if (!response.ok) {
      showNoChallengeMessage(day, monthData);
      return;
    }

    const data = await response.json();
    const dayText = String(data.day).padStart(2, "0");

    solutionTitle.textContent = `${dayText}-${monthNumberLabel(data.month)}-${data.year} - ${data.title}`;
    solutionMeta.textContent = `${data.filePath}${data.exportName ? ` | export: ${data.exportName}` : ""}`;
    solutionCode.textContent = data.code;
  } catch {
    solutionTitle.textContent = "Error loading solution";
    solutionMeta.textContent = "Unable to reach the API. Verify the server is running.";
    solutionCode.textContent = "// Request failed";
  }
}

function monthNumberLabel(monthId) {
  const monthNumber = monthToNumber[monthId];
  return String(monthNumber || "").padStart(2, "0");
}

async function fetchCatalog(refresh = false) {
  const endpoint = refresh ? "/api/catalog?refresh=1" : "/api/catalog";
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error("Catalog fetch failed");
  }

  state.catalog = await response.json();
}

async function refreshUI() {
  renderYearSelect();
  renderMonthSelect();
  renderCalendar();

  const monthData = getMonthData();
  const hasSelection = monthData && monthData.challengeDays.includes(Number(state.selectedDay));

  if (hasSelection) {
    await loadSolution(Number(state.selectedDay));
    return;
  }

  solutionTitle.textContent = "Select a day with a solution";
  solutionMeta.textContent = "The panel will show the source file path and the solution code.";
  solutionCode.textContent = "// Waiting for selection";
}

yearSelect.addEventListener("change", async (event) => {
  state.selectedYear = Number(event.target.value);

  const yearData = getYearData();
  state.selectedMonth = getLatestMonthWithChallenges(yearData);

  const monthData = getMonthData();
  state.selectedDay = monthData?.challengeDays[0] ?? null;

  await refreshUI();
});

monthSelect.addEventListener("change", async (event) => {
  state.selectedMonth = event.target.value;

  const monthData = getMonthData();
  state.selectedDay = monthData?.challengeDays[0] ?? null;

  await refreshUI();
});

refreshButton.addEventListener("click", async () => {
  refreshButton.disabled = true;
  refreshButton.textContent = "Refreshing solutions...";

  try {
    await fetchCatalog(true);
    setInitialSelection();
    await refreshUI();
  } finally {
    refreshButton.disabled = false;
    refreshButton.textContent = "Refresh solutions";
  }
});

async function init() {
  try {
    await fetchCatalog();
    setInitialSelection();
    await refreshUI();
  } catch {
    calendarTitle.textContent = "Unable to load UI";
    calendarSubtitle.textContent = "Error loading solutions";
    solutionTitle.textContent = "Initialization error";
    solutionMeta.textContent = "Make sure you run the server from this project.";
    solutionCode.textContent = "// Initialization failed";
  }
}

init();
