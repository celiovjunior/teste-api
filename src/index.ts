import express from "express";
import { getData } from "./service/getData";

const app = express();
const router = express.Router();

app.get('/products', (req, res) => {
  getData("products")
})

// app.get('/products', (req, res) => {
//   return res.send({ "message": "hello products endpoint" })
// })

app.listen(3333, () => {
  console.log('🐎 Server is running!')
})