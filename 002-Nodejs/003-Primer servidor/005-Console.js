// importo librería
var servidor = require('http');

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("<h1>Hola mundo desde Node.js</h1>");
    console.log("Alguien ha entrado en tu web");
}).listen(8080)