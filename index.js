const express = require('express')
const { response } = require("./src/middleware/common");
require("dotenv").config();
const bodyParser = require('body-parser')
const morgan = require("morgan")

const app = express()
const mainRouter = require("./src/routes/index")

app.use(morgan("dev"))

app.use(bodyParser.json())

app.use("/", mainRouter)
// app.all("*",(req,res,next) => {
//   response(res,404,false,null,"404 Not Found")
// })
// app.get("/", (req, res, next) => {
//   res.status(200).json({ status: "success", statusCode: 200 });
// });

const server = http.createServer((req,res) => {
    if(req.url == '/hello') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end('Hello world')
    }else{
        res.writeHead(200,{'Content-Type': 'application/json'})
        res.end('OK')
    }
})

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
