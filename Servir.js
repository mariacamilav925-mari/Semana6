pregunta6:
respuesta:

const express = require('express');
const app = express();

// Habilita leer datos en formato JSON
app.use(express.json());

// Ruta que recibe los datos por POST
app.post('/registro', (req, res) => {
  // Extrae los datos que se envíen
  const nombre = req.body.nombre;
  const edad = req.body.edad;
  const correo = req.body.correo;

  // Devuelve la respuesta con los datos recibidos
  res.json({
    mensaje: "Datos recibidos correctamente",
    datos: {
      nombre: nombre,
      edad: edad,
      correo: correo
    }
  });
});

// El servidor escucha en el puerto 3000
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
