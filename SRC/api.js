import express from "express"
import { CoreSuite } from "./core.js"

const app = express()
app.use(express.json())

app.post("/analyze", (req, res) => {
  res.json(CoreSuite.analyze(req.body.text || ""))
})

app.post("/summary", (req, res) => {
  res.json({ summary: CoreSuite.summarize(req.body.text || "") })
})

app.listen(3000, () => console.log("CoreSuite API running on port 3000"))
