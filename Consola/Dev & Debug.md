```JS
const { setInterval } = require("timers/promises");

const fs = require("fs"); // Importa el módulo fs

const out = fs.createWriteStream("./logs/out.log", { flags: "a" });

const err = fs.createWriteStream("./logs/err.log", { flags: "a" });

//Escribe [[Writable Streams]]
  

  out.write(new Date() + "\n");

  err.write(new Error("Oops 2") + "\n");

  

// Cierra los streams de escritura cuando el proceso termine

process.on("exit", () => {

  out.end();

  err.end();

});
```