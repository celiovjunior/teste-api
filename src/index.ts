import express, { Request, Response } from "express";

const app = express()

app.get("/", (req: Request, res: Response) => {
  return res.json({ message: 'hellooo' })
})

app.listen(3333)