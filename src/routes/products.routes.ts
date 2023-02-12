import { Router } from "express";
import { getData } from "../service/getData";

const productsRoute = Router()

productsRoute.get('/', async (req, res) => {
  const productsJsonData = await getData('products')
  return res.json(productsJsonData)
})

export { productsRoute };
