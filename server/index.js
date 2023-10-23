const express = require('express')
const server = express()
const connectdb = require('../db/connectdb')
const cors = require('cors')
const bodyParser = require('body-parser')
const web = require('../routes/web')


server.use(cors()) // middleware present b/w client and server to change requests
server.use(bodyParser.json())


//database connection
connectdb()
server.use(express.urlencoded({extended:false}))


//router-Load (call routers)
server.use('/',web)


// public folder static files setup
server.use(express.static('public'))


server.listen(8080,()=>{
  console.log("server started at port:8080 ...");
})
