import { promises as fs } from "node:fs";
import path from "node:path";

const CHALLENGES_ROOT = path.resolve(process.cwd(), "src", "challenges");

const MONTHS = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

const MONTH_NUMBER = MONTHS.reduce((acc, month, index) => {
  acc[month] = index + 1;
  return acc;
}, {});

let cachedCatalog = null;

function capitalize(text) {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function parseTitlesFromTests(fileContent) {
  const titles = new Map();
  const titleMatcher = /styleText\("(\d{2})-\d{2}-\d{4}\s*-\s*([^"\n]+)"/g;

  let match = null;
  while ((match = titleMatcher.exec(fileContent)) !== null) {
    const day = Number(match[1]);
    const title = match[2].trim();
    if (!Number.isNaN(day) && title) {
      titles.set(day, title);
    }
  }

  return titles;
}

function getPrimaryExportName(fileContent) {
  const functionMatch = fileContent.match(/export\s+function\s+([A-Za-z_$][\w$]*)\s*\(/);
  if (functionMatch) {
    return functionMatch[1];
  }

  const constArrowMatch = fileContent.match(
    /export\s+const\s+([A-Za-z_$][\w$]*)\s*=\s*(?:async\s*)?\([^)]*\)\s*=>/,
  );
  if (constArrowMatch) {
    return constArrowMatch[1];
  }

  const constValueMatch = fileContent.match(/export\s+const\s+([A-Za-z_$][\w$]*)\s*=/);
  if (constValueMatch) {
    return constValueMatch[1];
  }

  return "";
}

function getDaysInMonth(year, monthName) {
  const monthNumber = MONTH_NUMBER[monthName];
  if (!monthNumber) {
    return 31;
  }

  return new Date(year, monthNumber, 0).getDate();
}

function normalizeMonth(month) {
  return String(month || "").trim().toLowerCase();
}

async function buildCatalog() {
  const yearsDirs = await fs.readdir(CHALLENGES_ROOT, { withFileTypes: true });
  const yearNames = yearsDirs
    .filter((entry) => entry.isDirectory() && /^\d{4}$/.test(entry.name))
    .map((entry) => entry.name)
    .sort((a, b) => Number(a) - Number(b));

  const years = [];

  for (const yearName of yearNames) {
    const yearNumber = Number(yearName);
    const yearPath = path.join(CHALLENGES_ROOT, yearName);
    const monthEntries = await fs.readdir(yearPath, { withFileTypes: true });

    const monthNames = monthEntries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort((a, b) => {
        const first = MONTH_NUMBER[a] ?? 100;
        const second = MONTH_NUMBER[b] ?? 100;
        return first - second;
      });

    const months = [];

    for (const monthName of monthNames) {
      const monthPath = path.join(yearPath, monthName);
      const monthFiles = await fs.readdir(monthPath, { withFileTypes: true });
      const dayFileNames = monthFiles
        .filter((entry) => entry.isFile() && /^\d{1,2}\.js$/.test(entry.name))
        .map((entry) => entry.name)
        .sort((a, b) => Number(a.split(".")[0]) - Number(b.split(".")[0]));

      const testsPath = path.join(monthPath, "challengesTests.js");
      let titleByDay = new Map();

      try {
        const testsFile = await fs.readFile(testsPath, "utf8");
        titleByDay = parseTitlesFromTests(testsFile);
      } catch {
        // Keep empty title map for months that do not have tests yet.
      }

      const challenges = [];

      for (const dayFileName of dayFileNames) {
        const day = Number(dayFileName.split(".")[0]);
        const challengePath = path.join(monthPath, dayFileName);
        const code = await fs.readFile(challengePath, "utf8");

        const exportName = getPrimaryExportName(code);
        const title =
          titleByDay.get(day) ||
          (exportName ? capitalize(exportName) : `Day ${String(day).padStart(2, "0")}`);

        challenges.push({
          day,
          title,
          exportName,
          filePath: path.relative(process.cwd(), challengePath).replace(/\\/g, "/"),
        });
      }

      months.push({
        id: monthName,
        label: capitalize(monthName),
        daysInMonth: getDaysInMonth(yearNumber, monthName),
        challengeDays: challenges.map((challenge) => challenge.day),
        challenges,
      });
    }

    years.push({
      year: yearNumber,
      months,
    });
  }

  return {
    generatedAt: new Date().toISOString(),
    years,
  };
}

function findMonth(catalog, year, month) {
  const targetYear = catalog.years.find((yearItem) => yearItem.year === year);
  if (!targetYear) {
    return null;
  }

  const monthId = normalizeMonth(month);
  return targetYear.months.find((monthItem) => monthItem.id === monthId) || null;
}

export async function getCatalog() {
  if (!cachedCatalog) {
    cachedCatalog = await buildCatalog();
  }

  return cachedCatalog;
}

export function clearCatalogCache() {
  cachedCatalog = null;
}

export async function getSolution({ year, month, day }) {
  const parsedYear = Number(year);
  const parsedDay = Number(day);
  const monthId = normalizeMonth(month);

  if (!Number.isInteger(parsedYear) || !Number.isInteger(parsedDay) || !monthId) {
    return null;
  }

  const catalog = await getCatalog();
  const monthInfo = findMonth(catalog, parsedYear, monthId);

  if (!monthInfo) {
    return null;
  }

  const challenge = monthInfo.challenges.find((item) => item.day === parsedDay);
  if (!challenge) {
    return null;
  }

  const absoluteFilePath = path.join(process.cwd(), challenge.filePath);
  const code = await fs.readFile(absoluteFilePath, "utf8");

  return {
    year: parsedYear,
    month: monthId,
    day: parsedDay,
    title: challenge.title,
    exportName: challenge.exportName,
    filePath: challenge.filePath,
    code,
  };
}
