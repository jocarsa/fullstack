// importo librería
var servidor = require('http');
var archivos = require('fs');

servidor.createServer(function(req,res){  
    archivos.readFile("index.html",function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data)      
    })
    
    
}).listen(8080)