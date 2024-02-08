// importo librería
var servidor = require('http');
let contador = 0;

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    let cadena = "";
    switch(req.url){
        case "/":
            cadena = "<h1>Hola mundo desde Node.js</h1>";
            break;
        case "/sobremi":
            cadena = "<h1>Esta es la pagina de sobre mi</h1>";
            break;
        case "/contacto":
            cadena = "<h1>Esta es la pagina de contacto</h1>";
            break;
        default:
            cadena = "<h1>No encontrado</h1>";
    }
    res.end(cadena);
}).listen(8080)