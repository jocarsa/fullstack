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
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    res.writeHead(200,{'Content-Type':'text/json'});
    conexion.query('SELECT * FROM vista_eventos',function(err,result,fields){
        if(err) throw err;
        res.end(JSON.stringify(result))
    })
}).listen(8080)
