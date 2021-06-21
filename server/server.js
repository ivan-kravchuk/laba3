const express = require('express')
const dotenv = require('dotenv')
const MongoClient = require("mongodb").MongoClient;
let cors = require('cors')
const routesUrls = require('./routes/routes')
const app = express()

dotenv.config()

app.use(express.json())
app.use(cors())
app.use('/app',routesUrls)


const mongoClient = new MongoClient("mongodb+srv://user123:1234@cluster0.v7jgi.mongodb.net/tasks", { useUnifiedTopology: true });
mongoClient.connect(function(err, client){
    if(err) return console.log(err);
    db = client;
    app.locals.collection = client.db("kpp21").collection("kpp21");
    app.listen(4000, function(){
        console.log("Сервер ожидает подключения...");
    });
});