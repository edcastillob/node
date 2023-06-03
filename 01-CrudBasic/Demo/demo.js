// Importo express
const express = require("express");
// Creo instancia de express
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));

// app.use("/", (req, res, next) => {
//     console.log(`Reques a ${req.url}`);
//     next();
// })

// app.get("/", (req, res, next) => {
//     console.log("Server listening at port 3001")
//     res.status(200).send("Server listening...")
// })

// // http://localhost:3001/home
// app.get("/home", (req, res, next) => {
//     res.status(200).send("Home")
// })

// app.get("/ab*cd", (req, res) => {
//     res.status(200).send("ab*cd")
// })

// app.get("/ab?cd", (req, res) => {
//     res.status(200).send("ab?cd")
// })

// app.get("/api/:nombre/:apellido", (req, res) => {
//     // req.params = { nombre: 'Rick', apellido: 'Sanchez', id: '1' }
//     const { nombre, apellido } = req.params;
//     res.json( { nombre, apellido } )
// })

// // * http://localhost:3001/apiquery?nombre=Rick&apellido=Sanchez
// // ? req.query = { nombre: "Rick", apellido: "Sanchez"}
// app.get("/apiquery", (req, res) => {
//     console.log(req.query);
//     const { nombre, apellido } = req.query;
//     res.send("OK");
// })

app.use(express.json());
const characters = [];
let id = 1;

app.post("/character", (req, res) => {
    characters.push({...req.body, id: id++});
    res.json(characters);
})

app.get("/character", (req, res) => {
    res.json(characters);
})
// app.delete("/character", (req, res) => {} )

app.listen(3001);
