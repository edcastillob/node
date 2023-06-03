const express = require("express");
const router = express.Router();

const characters = [];
let id = 1;

router.get("/", (req, res, next) => {
    console.log("Server listening at port 3001")
    res.status(200).send("Server listening...")
})

router.post("/character", (req, res) => {
    characters.push({...req.body, id: id++});
    res.json(characters);
})

router.get("/character", (req, res) => {
    res.json(characters);
})

module.exports = router;
