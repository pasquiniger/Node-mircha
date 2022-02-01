'use strict'
const http = require('http').createServer()
const webServer = (req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end('<h1>Hola Node.js</h1>')
}
http
    .on('request', webServer)
    .listen(3000,'localhost')
console.log('servidor corriendo en localhost:3000')