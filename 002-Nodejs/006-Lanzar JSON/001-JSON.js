// importo librería
var servidor = require('http');
let contador = 0;

servidor.createServer(function(req,res){
    articulo = {
        "titulo":"Este es el primer articulo",
        "contenido":"Este es el contenido"
    }
    res.writeHead(200,{'Content-Type':'text/json'});
    res.end(JSON.stringify(articulo));
    
}).listen(8080)