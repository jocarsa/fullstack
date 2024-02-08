// importo librería
var servidor = require('http');
var url = require('url');

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    
    res.end("Hola");
}).listen(8080)