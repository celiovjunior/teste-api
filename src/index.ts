import express from "express";
import https from "https";

https.get("https://mockend.com/juunegreiros/BE-test-api/users", (response) => {
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

const app = express()
// app.use(express.json())


// app.get("/", (req: Request, res: Response) => {
//   return res.json({ message: 'hellooo' })
// })

app.listen(3333, () => {
  console.log('🐎 server is running')
})