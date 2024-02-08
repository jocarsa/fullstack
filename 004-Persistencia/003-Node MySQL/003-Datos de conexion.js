var servidor = require('http');
// npm install mysql
var mysql = require('mysql');

var conexion = mysql.createConnection({
    host:"localhost",
    user:"planesvalencia",
    password:"planesvalencia",
    database:"planesvalencia"
});