import express from "express";
import { getData } from "./service/getData";

const app = express();

app.get('/products', async (req, res) => {
  req.body = await getData('products')
  const productsJsonData = req.body
  return res.json(productsJsonData)
})

app.get('/clients', async (req, res) => {
  req.body = await getData('users')
  const usersJsonData = req.body
  return res.json(usersJsonData)
  
})

app.listen(3333, () => {
  console.log('🐎 Server is running!')
})