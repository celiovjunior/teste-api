import https from "https";

const getData = (path: string) => {
  https.get(`https://mockend.com/juunegreiros/BE-test-api/${path}`, (response) => {
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
}

export default getData;