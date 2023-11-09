"use strict";

const express = require("express");

//Contants
const PORT = 8080;
const HOST = "0.0.0.0";

//App
const app = express();
app.get("/", (req, res) => {
res.send("Hello World juanes cacorrìn");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);