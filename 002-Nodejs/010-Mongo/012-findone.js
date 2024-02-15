// npm install mongodb

const {MongoClient} = require("mongodb");

const url = "mongodb://localhost:27017";

const basededatos = "blog";

const cliente = new MongoClient(url,{});

async function principal(){
    await cliente.connect();
    const base = cliente.db(basededatos);
    
    const coleccion = base.collection('entradas');
    const entradas = await coleccion.findOne();
    console.log(entradas);
    await cliente.close();
}

principal();