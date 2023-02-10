import express from "express";
import https from "https";

const baseURL = "https://mockend.com/juunegreiros/BE-test-api"


// colocar em outro arquivo \/
const getData = (path) => {
  https.get(`${baseURL}/${path}`, (response) => {
    var data = '';
  
    response.on('data', (chunk) => {
      data += chunk
    })
  
    response.on('end', () => {
      JSON.parse(data)   
    })
  }).on("error", (err) => {
    console.log("Error: " + err.message)
  })
}

const app = express()
app.use(express.json())

app.get('/users', (req, res) => {
  
  const usersData = getData("users")
  return res.send(usersData)
  
})

app.get('/products', (req, res) => {
  getData("products")
})

// app.get('/products', (req, res) => {
//   return res.send({ "message": "hello products endpoint" })
// })

app.listen(3333, () => {
  console.log('🐎 Server is running!')
})