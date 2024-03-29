Los Writable Streams son una abstracción para un destino al que se pueden escribir datos. Son una parte fundamental del módulo Streams de Node.js y se pueden usar para escribir datos en archivos, sockets de red, buffers y otros destinos.

**Características:**

- **Backpressure:** Los Writable Streams implementan backpressure, lo que significa que pueden controlar la velocidad a la que se escriben los datos. Esto es importante para evitar que el destino se sobrecargue.
- **Cola:** Los Writable Streams pueden tener una cola para almacenar datos mientras el destino está ocupado. Esto es útil para evitar la pérdida de datos.
- **Eventos:** Los Writable Streams emiten eventos para indicar su estado, como cuando está listo para recibir datos, cuando se ha escrito un chunk de datos o cuando se ha producido un error.

**Cómo usarlos:**

Para usar un Writable Stream, primero debes crearlo. Puedes hacerlo usando el constructor `WritableStream`. Luego, puedes escribir datos en el stream usando el método `write()`. Finalmente, debes cerrar el stream cuando termines de escribir datos usando el método `end()`.

**Ejemplo:**

```JS
const fs = require("fs");

const out = fs.createWriteStream("./out.log");

out.write("Hola mundo!\n");
out.end();
```
Este código crea un Writable Stream para el archivo `out.log` y escribe la cadena "Hola mundo!" en el archivo.