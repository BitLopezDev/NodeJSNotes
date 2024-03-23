Los Readable Streams son una abstracción para una fuente de la que se pueden leer datos. Son una parte fundamental del módulo Streams de Node.js y se pueden usar para leer datos de archivos, sockets de red, buffers y otras fuentes.

**Características:**

- **Lectura por chunks:** Los Readable Streams leen datos en chunks. Esto es útil para leer grandes cantidades de datos de forma eficiente.
- **Eventos:** Los Readable Streams emiten eventos para indicar su estado, como cuando hay datos disponibles para leer, cuando se ha leído un chunk de datos o cuando se ha producido un error.

**Cómo usarlos:**

Para usar un Readable Stream, primero debes crearlo. Puedes hacerlo usando el constructor `ReadableStream`. Luego, puedes leer datos del stream usando el método `read()`. Finalmente, debes cerrar el stream cuando termines de leer datos usando el método `destroy()`.

**Ejemplo:**

JavaScript

```JavaScript
const fs = require("fs");

const in = fs.createReadStream("./in.txt");

in.on("data", (chunk) => {
  console.log(chunk.toString());
});

in.on("end", () => {
  console.log("Fin del archivo");
});
```

Este código crea un Readable Stream para el archivo `in.txt` y lee el contenido del archivo chunk por chunk. El evento `data` se emite cada vez que hay un nuevo chunk de datos disponible para leer. El evento `end` se emite cuando se ha leído todo el archivo.

## Diferencias entre Writable Streams y Readable Streams

Las principales diferencias entre Writable Streams y Readable Streams son:

- **Dirección del flujo de datos:** Los Writable Streams se usan para escribir datos en un destino, mientras que los Readable Streams se usan para leer datos de una fuente.
- **Manejo de errores:** Los Writable Streams implementan backpressure para evitar la pérdida de datos, mientras que los Readable Streams no tienen backpressure y pueden perder datos si el destino no está listo para leerlos.
- **Eventos:** Los Writable Streams emiten eventos para indicar su estado de escritura, mientras que los Readable Streams emiten eventos para indicar su estado de lectura.