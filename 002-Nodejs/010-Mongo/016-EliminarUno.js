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
    await coleccion.deleteOne(  
        {
            titulo:"Esta es la segunda entrada"
        }
    )
    await cliente.close()
}

principal();