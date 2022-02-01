'use strict'
const http = require('http').createServer(webServer),
    fs = require('fs')

function webServer(req,res){
    function readFile(err,data){
        if (err) throw err
        res.end(data)
    }
    res.writeHead(200, {'Content-Type':'text/html'})
    fs.readFile('assets/index.html', readFile)
}
http.listen(3000)
console.log('servidor corriendo en localhost:3000')