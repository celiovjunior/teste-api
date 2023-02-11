import express from "express";
import { getData } from "./service/getData";

const app = express();

app.get('/products', async (req, res) => {
  const productsJsonData = await getData('products')
  return res.json(productsJsonData)
})

app.get('/users', async (req, res) => {
  const usersJsonData = await getData('users')
  return res.json(usersJsonData)
})

app.get('/budget/:userId/:productIds', async (req, res) => {
  const input = {    
    "userId": Number(req.params.userId),
    "productIds": req.params.productIds.split(',').map(id => Number(id))
  }

  const productsList = await getData('products')
  // console.log(data.budget.productIds)

  const filteredProducts = productsList.filter(product => input.productIds.includes(product.id))
  console.log(filteredProducts)

  const usersList = await getData('users')
  const user = usersList.filter(user => input.userId === user.id)
  console.log(user)

  return res.json(input)
})

app.listen(3333, () => {
  console.log('🐎 Server is running!')
})

// exemplo
// app.use("/users", middleware, userController.list)
// app.use("/products", middleware, productController.list)
// app.use("/budget/:userId/:productsIds", middleware, userController.budget)