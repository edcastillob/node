const express = require("express");
const router = require("./routes.js");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Rutas
app.use("/", router);
app.use("/character", router);

app.listen(3001);

// npm install cors
// redirect...