export function basicAnalysis(text) {
  return {
    characters: text.length,
    uppercase: (text.match(/[A-Z]/g) || []).length,
    lowercase: (text.match(/[a-z]/g) || []).length
  }
}
