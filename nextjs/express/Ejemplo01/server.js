const express = require("express"); // Cargar el paquete instalado "npm intall express".
const app = express(); // Crear una instancia (un objeto) de express. Se almacena en la variable "app".

let estancias = [
  { codigo: "A23", nRadiadores: 2, temperaturaConfort: 21 },
  { codigo: "A24", nRadiadores: 2, temperaturaConfort: 21 },
  { codigo: "A25", nRadiadores: 3, temperaturaConfort: 20 },
  { codigo: "A26", nRadiadores: 3, temperaturaConfort: 20 },
  { codigo: "A27", nRadiadores: 2, temperaturaConfort: 21 },
];

// MIDDLEWARE
app.use((req, res, next) => {
  let a = "hola";

  console.log(
    `Has recibido una petición con nombre ${a} con fecha ${new Date().toLocaleString()} y ruta ${req.url}`,
  );
  next();
}); // app.use() se ejecuta con todas las peticiones entrantes. Sea cual sea su verbo o ruta.

app.get("/habitaciones", (req, res, next) => {
  // res.json(estancias);
  console.log(`Has recibido una petición get`);
  next();
});

app.get("/habitaciones/:codigo", (req, res) => {
  let encontrado = false;
  let estanciaBuscar = req.params.codigo;

  for (let i = 0; i < estancias.length; i++) {
    if (estancias[i].codigo === estanciaBuscar) {
      res.json(estancias[i]);
      encontrado = true;
      break;
    }
  }

  if (!encontrado) {
    res.status(404).json({ error: 'Estancia no encontrada' });
  }
});

app.post('/habitaciones', (req, res) => {
  let nuevaEstancia = req.body;

  estancias.push(nuevaEstancia);

  res.json(estancias);
})

// app.listen(3000, callback)
app.listen(3000, () => {
  console.log("Escuchando el puerto 3000");
});
