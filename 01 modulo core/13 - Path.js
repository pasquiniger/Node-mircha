'use strict'
const http = require('http').createServer(webServer),
    path = require('path'),
    urls = [
        {
            route : '/',
            output : '<h2>Home</h2>'
        },
        {
            route : 'acerca',
            output : '<h2>Acerca de</h2>'
        },
        {
            route : 'contacto',
            output : '<h2>Contacto</h2>'
        }
    ]
function webServer(req,res){
    let message = '<h1>Hola Node.js</h1>',
        pathURL = path.basename(req.url)
    console.log(pathURL)
    urls.forEach( pos => {
        if (pos.route == pathURL){
            res.writeHead(200, {'Content-Type':'text/html'})
            res.end(message + pos.output)
            console.log(pathURL)
        }
    } )
    if (!res.finished){
        res.writeHead(404, {'Content-Type':'text/html'})
        res.end('<h1>Error 404 not found</h1>')
    }

}
http.listen(3000)
