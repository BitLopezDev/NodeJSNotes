```JS
const { setInterval } = require("timers/promises");

const fs = require("fs"); // Importa el módulo fs

//const util = require("util");

const out = fs.createWriteStream("./logs/out.log", { flags: "a" });

const err = fs.createWriteStream("./logs/err.log", { flags: "a" });

  

out.write(new Date() + "\n");

err.write(new Error("Oops 2") + "\n");

  

// Cierra los streams de escritura cuando el proceso termine

process.on("exit", () => {

  out.end();

  err.end();

});

/*

const msgDepuracion = util.debuglog("Pautal", { level: 2 });

msgDepuracion("Esto es un mensaje de depuración");*/
```