import { getData } from "../service/getData"

const budgetMiddleware = async function (req, res, next) {
  const input = {    
    "userId": Number(req.params.userId),
    "productIds": req.params.productIds.split(',').map(id => Number(id))
  }

  const productsList = await getData('products')

  const filteredProducts = productsList.filter(product => input.productIds.includes(product.id))

  const usersList = await getData('users')
  const user = usersList.filter(user => input.userId === user.id)
  const userTax = user[0].tax

  const productsPriceSum = filteredProducts.reduce((acc, product) => acc + product.price, 0)
  
  const budget = productsPriceSum * (userTax / 100)
  
  return next();
  // return res.json({ "budget": budget })
}

export default budgetMiddleware