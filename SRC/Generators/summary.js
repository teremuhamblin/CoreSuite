export function generateSummary(text) {
  return text.length > 100 ? text.slice(0, 100) + "..." : text
}
