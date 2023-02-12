import { Router } from "express";
import { getData } from "../service/getData";

const usersRoute = Router()

usersRoute.get("/", async (req, res) => {
  const usersJsonData = await getData('users')
  return res.json(usersJsonData)
})

export { usersRoute };
