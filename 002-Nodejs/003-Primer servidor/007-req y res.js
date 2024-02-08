// importo librería
var servidor = require('http');
let contador = 0;

servidor.createServer(function(req,res){
    contador++;
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("<h1>Hola mundo desde Node.js</h1>");
    console.log("Alguien ha entrado en tu web");
    console.log("En el día de hoy has tenido "+(contador/2)+" visitantes");
    console.log("req es: ");
    console.log(req);
    console.log("res es: ");
    console.log(res);
}).listen(8080)