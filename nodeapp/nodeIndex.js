const http = require("http");

http.createServer(function (req, res) {
    res.write("<h1>Hola Mundo!</h1>");
  })
  .listen(3000);