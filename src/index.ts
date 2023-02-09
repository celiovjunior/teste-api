import express from "express";
import https from "https";

const baseURL = "https://mockend.com/juunegreiros/BE-test-api/"

https.get(`${baseURL}users`, (response) => {
  var data = '';

  response.on('data', (chunk) => {
    data += chunk
  })

  response.on('end', () => {
    console.log(JSON.parse(data))      
  })
}).on("error", (err) => {
  console.log("Error: " + err.message)
})

https.get(`${baseURL}products`, (response) => {
  var productData = '';

  response.on('data', (chunk) => {
    productData += chunk
  })

  response.on('end', () => {
    // console.log(JSON.parse(productData))
  })
}).on("error", (err) => {
  console.log("Error: " + err.message)
})

const app = express()
app.use(express.json())

app.get('/users', (req, res) => {
  return res.send({"message": "hello users endpoint"})
})

app.get('/products', (req, res) => {
  return res.send({ "message": "hello products endpoint" })
})

app.listen(3333, () => {
  console.log('🐎 Server is running!')
})