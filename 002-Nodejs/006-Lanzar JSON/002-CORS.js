var servidor = require('http');

servidor.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    articulo = {
        "titulo":"Este es el primer articulo",
        "contenido":"Este es el contenido"
    }
    res.writeHead(200,{'Content-Type':'text/json'});
    res.end(JSON.stringify(articulo));
    
}).listen(8080)