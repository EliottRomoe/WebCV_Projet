// Server pour mon API !!!!!!!!!!!!!!!!!!!

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const AuthRoute = require('../BackEnd/Formulaire/Routes/Auth')

const app = express();
app.use(express.json());
const nbaplayersRouter = require("./MonApi/Routes/nbaPlayers");
const conctactRouter = require("./Contact/Routes/contact");

mongoose.connect("mongodb://127.0.0.1:27017/Projet_Final", 
        {useNewUrlParser : true, useUnifiedTopology : true})
        .then(() => console.log("Connexion à mongoDB OK"))
        .catch(() => console.log("Connexion à mongoDB not OK"))


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, content, Accept, Content-Type, Authorization")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS")
    next()
})

app.use(bodyParser.json());

app.use("/api/contact", conctactRouter );
app.use("/api/nbaPlayers", nbaplayersRouter);


// app.use("/api", AuthRoute);

// Serveur pour formulaire !!!!!!!!!!!!!!!!

app.listen(3000, () => {console.log("Express est bien démarré sur le port 3000")});
