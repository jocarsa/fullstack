// importo librería
var servidor = require('http');
var url = require('url');

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var parametros = url.parse(req.url,true).query;
    res.write("Hola");
    console.log(parametros);
    for (const [clave, valor] of Object.entries(parametros)) {
      res.write(`${clave}: ${valor}`);
    }
    res.end("ok");
}).listen(8080)