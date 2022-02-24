const express = require('express')
const app = express()
const port = 3000

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", { titulo: "Titulo Dinamico" });
});

app.get("/servicios", (req, res) => {
  res.render("servicios", { tituloservicio: "Servicios EJS" });
});

app.use((req, res, next) => {
  res.status(404).render("404", {
    tituloservicio: "Página 404",
    contenido: "No se encontro la ruta"
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})