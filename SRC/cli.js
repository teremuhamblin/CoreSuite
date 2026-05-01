#!/usr/bin/env node
import { CoreSuite } from "./core.js"
import fs from "fs"

const command = process.argv[2]
const file = process.argv[3]

if (!command || !file) {
  console.log("Usage: coresuite <analyze|summary> <file>")
  process.exit(1)
}

const content = fs.readFileSync(file, "utf8")

if (command === "analyze") {
  console.log(CoreSuite.analyze(content))
}

if (command === "summary") {
  console.log(CoreSuite.summarize(content))
}
