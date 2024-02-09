// importo librería
var servidor = require('http');
var archivos = require('fs');

servidor.createServer(function(req,res){
    
    res.writeHead(200,{'Content-Type':'text/html'});
    let cadena = "";
    archivos.readFile("html/cabecera.html",function(err,data){
                res.write(data)      
            })
    switch(req.url){
        case "/":
            archivos.readFile("html/index.html",function(err,data){
                res.write(data)      
            })
            break;
        case "/sobremi":
            archivos.readFile("html/sobremi.html",function(err,data){
                res.write(data)      
            })
            break;
        case "/contacto":
            archivos.readFile("html/contacto.html",function(err,data){
                res.write(data)      
            })
            break;
    }
    archivos.readFile("html/pie.html",function(err,data){
        res.write(data)  
        res.end("");
    })
    //res.end("");
    archivos.appendFile("registro.csv",req.socket.remoteAddress+ "\n",function(err,data){
        console.log("ok");     
    })
    
}).listen(8080)