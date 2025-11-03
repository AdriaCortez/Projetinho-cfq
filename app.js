import express from 'express';
const app = express();
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser());

const port = 3003;
import "app.jsx";
    app.listen(port, () => {
        console.log(`Example app listening on port ${'http://127.0.0.1:5500/index.html#'}`);
    });

  const { MongoCliente, Collection } = require("mongodb");

  const uri = "mongodb://mongodb_atividade:27017/history"

  const client = new MongoCliente(uri);
  await client.connect();


async function run() {
    try {

        const db = client.db("history");
        const usersCollection = db.collection("historico_pesquisa");
        var doc_pesquisa = document.getElementById("busca2").value;
        var abc = String(doc_pesquisa)
         const user = { termo: abc, timestamp: new Date() };


        const result = await usersCollection.insertOne(user);
        console.log(`New user created with the following id: ${result.insertedId}`);


    } finally { await
     client.close(); }
    }