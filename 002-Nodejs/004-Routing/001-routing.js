// importo librería
var servidor = require('http');
let contador = 0;

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    
    switch(req.url){
        case "/":
            res.end("<h1>Hola mundo desde Node.js</h1>");
            break;
        case "/sobremi":
            res.end("<h1>Esta es la pagina de sobre mi</h1>");
            break;
        case "/contacto":
            res.end("<h1>Esta es la pagina de contacto</h1>");
            break;
        default:
            res.end("<h1>No encontrado</h1>");
    }
}).listen(8080)