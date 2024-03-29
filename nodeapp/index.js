const express = require("express");
const colors = require("colors");
const server = express();

server.listen(3000, () => {
  console.log("Servidor encendido");
});

server.get("/", (req, res) => {
  res.send("<h1>Hola Mundo</h1>");
  res.end();
});
