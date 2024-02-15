// npm install mongodb

const {MongoClient} = require("mongodb");

const url = "mongodb://localhost:27017";

const basededatos = "blog";

const cliente = new MongoClient(
    url,
    {
       
    }
);

async function principal(){
    await cliente.connect();
    const base = cliente.db(basededatos);
    
    const coleccion = base.collection('entradas');
    await coleccion.insertOne(
        {
            'titulo':'Esta es la primera entrada',
            'contenido':'Este es el contenido de la primera entrada',
            'fecha':'2024-02-15'
        })
    await cliente.close()
}