// importo librería
var servidor = require('http');
var url = require('url');

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var parametros = url.parse(req.url,true).query;
    res.end("Hola");
    console.log(parametros);
}).listen(8080)