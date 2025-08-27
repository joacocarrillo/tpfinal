const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const cors = require("cors");

const productosRoutes = require("./routes/productos");
const contactoRoutes = require("./routes/contacto");

const app = express();

// Configuración Handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); // permite que el frontend React acceda
app.use(express.static("public"));

// Rutas
app.use("/api/productos", productosRoutes); // << importante: prefijo /api
app.use("/api/contacto", contactoRoutes);

// Ruta principal
app.get("/", (req, res) => {
  res.render("index");
});

// Servidor
const PORT = 3001;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
