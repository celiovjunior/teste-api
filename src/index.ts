import express from "express";
import Product from "./models/Product";
import User from "./models/User";
import { getData } from "./service/getData";

const app = express();

app.get('/products', async (req, res) => {
  req.body = await getData('products')
  const productsJsonData = req.body

  const productsList = productsJsonData.map((item: Product) => {
    const product = {
      id: item.id,
      name: item.name,
      price: item.price
    }

    return product
  })

  return res.json(productsList)
})

app.get('/users', async (req, res) => {
  req.body = await getData('users')
  const usersJsonData = req.body
  
  const usersList = usersJsonData.map((item: User) => {
    const user = {
      id: item.id,
      name: item.name,
      tax: item.tax
    }
    return user
  })

  return res.json(usersList)
})

app.listen(3333, () => {
  console.log('🐎 Server is running!')
})