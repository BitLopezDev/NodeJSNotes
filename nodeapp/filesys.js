const { error } = require("console");
const fs = require("fs");
const file = process.argv[2];

if (!file) {
  throw new Error("Indica el archivo que quieres leer como segundo argumento");
}

const content = fs.readFile(file, async function (err, content) {

    if(err) {
        return console.error(err);
    }

    const lineas = content.toString().split("\n").length;
    console.log(`Cantidad de líneas: ${lineas}`);

});
