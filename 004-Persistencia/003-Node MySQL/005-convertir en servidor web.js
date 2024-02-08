var servidor = require('http');
// npm install mysql
var mysql = require('mysql');

var conexion = mysql.createConnection({
    host:"localhost",
    user:"planesvalencia",
    password:"planesvalencia",
    database:"planesvalencia"
});
conexion.connect(function(err){
    if(err) throw err;
    console.log("conectado")
    
 }) 

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("ok");
    conexion.query('SELECT * FROM vista_eventos',function(err,result,fields){
        if(err) throw err;
        console.log(result)
    })
}).listen(8080)
