[[INDEX Arquitecturas y Lógicas]] [[Console INDEX]] [[OS FS EETC Index]]
[[Funciones Index]]

Para levantar el servidor de Node.js, ponemos en index.js el siguiente código:
```js
const http = require("http");

  

http.createServer(function (req, res) {

    res.write("<h1>Hola Mundo!</h1>");

  })

  .listen(3000);

```