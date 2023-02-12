import { Router } from "express";

const budgetRoute = Router()

budgetRoute.get('/', (req, res) => {
  return res.json({ "budget": budget })
})

export { budgetRoute };
