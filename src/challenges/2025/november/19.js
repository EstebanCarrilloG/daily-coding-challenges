export function convert(heading) {
  let hashCount = 0;
  heading = heading.trim();

  for (let i = 0; i < heading.length; i++) {
    if (
      heading[i] === "#" &&
      (heading[i + 1] === " " || heading[i + 1] === "#")
    ) {
      hashCount++;
    } else {
      break;
    }
  }

  if (hashCount >= 7 || hashCount === 0) return "Invalid format";

  return `<h${hashCount}>${heading
    .slice(hashCount + 1)
    .trim()}</h${hashCount}>`;
}
