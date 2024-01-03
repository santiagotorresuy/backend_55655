const express = require("express")
const router = require("./routes/index")

const server = express()

const PORT = 8080

server.listen(PORT, () =>{
    console.log(`Running on port ${PORT}`)
})  

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

router(server)

module.exports = server

