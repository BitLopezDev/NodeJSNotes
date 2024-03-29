npm i express

```js
const express = require("express");

const colors = require("colors");

const server = express();

  

server.listen(3000, () => {

  console.log("Servidor encendido");

});

//El servidor escucha en el puerto 3000

  

server.get("/", (req, res) => {
	//al entrar a la ruta / el servidor envia el h1
  res.send("<h1>Hola Mundo</h1>");

  res.end();

});
```