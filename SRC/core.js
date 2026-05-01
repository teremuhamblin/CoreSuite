export const CoreSuite = {
  version: "1.0.0",

  analyze(text) {
    return {
      length: text.length,
      lines: text.split("\n").length,
      words: text.split(/\s+/).length
    }
  },

  summarize(text) {
    return text.length > 120
      ? text.slice(0, 120) + "..."
      : text
  }
}
