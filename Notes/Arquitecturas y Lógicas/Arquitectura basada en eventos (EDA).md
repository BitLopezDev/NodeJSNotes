## **Arquitectura basada en eventos: Una guía para principiantes**

Imagina que estás en una concurrida cafetería. En lugar de esperar en la fila para pedir tu café, decides usar un sistema de tickets. Cuando llega tu turno, un barista te entrega un ticket con un número. Te sientas y esperas a que tu número sea llamado. Cuando llega tu turno, te acercas al mostrador y recoges tu café.

En este escenario, el ticket es un **evento** que te notifica cuando tu café está listo. El barista es el **productor** del evento, y tú eres el **consumidor**. Este simple sistema ilustra la esencia de la **arquitectura basada en eventos (EDA)**.

<!--nota-->
Cuando llega tu turno, un productor de eventos te entrega un evento con un número. Te sientas y esperas a que tu número sea llamado. Cuando llega tu turno, te acercas al mostrador y recoges tu café.
<!--/nota-->

**¿Qué es EDA?**

EDA es un estilo arquitectónico que organiza el software en torno a eventos. En lugar de depender de llamadas a funciones o flujos de control rígidos, los componentes de software se comunican enviando y recibiendo eventos.

**¿Cómo funciona EDA?**

En EDA, los eventos son mensajes que encapsulan información sobre un cambio en el estado del sistema. Por ejemplo, un evento podría indicar que un usuario ha iniciado sesión, que se ha realizado una compra o que se ha detectado un error.

Los eventos se **publican** en un **canal de eventos**. Los componentes que están interesados ​​en recibir un tipo particular de evento se **suscriben** al canal. Cuando se publica un evento, se envía a todos los suscriptores del canal.

**Beneficios de EDA:**

- **Acoplamiento débil:** Los componentes no necesitan conocerse entre sí para comunicarse. Esto hace que el código sea más flexible y modular.
- **Escalabilidad:** EDA es fácil de escalar porque los eventos se pueden distribuir a muchos suscriptores de forma asincrónica.
- **Resiliencia:** Los eventos se pueden almacenar y reenviar en caso de errores, lo que hace que el sistema sea más resistente a fallos.

```TS
const EventEmitter = require('events');

const emitter = new EventEmitter();

// Productor de eventos
emitter.on('login', (user) => {
  console.log(`Usuario ${user.name} ha iniciado sesión`);
});

// Consumidor de eventos
emitter.on('login', (user) => {
  // Enviar un correo electrónico de bienvenida al usuario
});

// Publicar un evento
emitter.emit('login', { name: 'Juan Pérez' });

```

En este ejemplo, `EventEmitter` es una clase de Node.js que facilita la gestión de eventos. La variable `emitter` es una instancia de `EventEmitter`.

La función `emitter.on()` se utiliza para registrar un callback que se ejecutará cuando se emita un evento con el nombre especificado. En este caso, se registran dos callbacks para el evento `login`.

La función `emitter.emit()` se utiliza para publicar un evento. En este caso, se publica un evento `login` con un objeto que contiene el nombre del usuario.

**En resumen:**

EDA es un estilo arquitectónico que ofrece muchos beneficios para el desarrollo de software. Es una buena opción para aplicaciones que necesitan ser flexibles, escalables y resilientes.

**Recursos adicionales:**

- Guía para arquitectos sobre cómo implementar arquitecturas basadas en eventos: [https://content.cdntwrk.com/files/aT0xNDcwNzI3JnY9MSZpc3N1ZU5hbWU9Z3UlQzMlQURhLXBhcmEtYXJxdWl0ZWN0b3Mtc29icmUtYyVDMyVCM21vLWltcGxlbWVudGFyLWFycXVpdGVjdHVyYXMtYmFzYWRhcy1lbi1ldmVudG9zJmNtZD1kJnNpZz1mMjhmOWU3MzI1ODQwY2IwM2U3M2U2NDYxZjJhYjUzNg%253D%253D](https://content.cdntwrk.com/files/aT0xNDcwNzI3JnY9MSZpc3N1ZU5hbWU9Z3UlQzMlQURhLXBhcmEtYXJxdWl0ZWN0b3Mtc29icmUtYyVDMyVCM21vLWltcGxlbWVudGFyLWFycXVpdGVjdHVyYXMtYmFzYWRhcy1lbi1ldmVudG9zJmNtZD1kJnNpZz1mMjhmOWU3MzI1ODQwY2IwM2U3M2U2NDYxZjJhYjUzNg%253D%253D)
- Arquitectura impulsada por eventos: la guía definitiva: [https://appmaster.io/es/blog/arquitectura-basada-en-eventos](https://appmaster.io/es/blog/arquitectura-basada-en-eventos)