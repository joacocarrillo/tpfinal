const express = require("express");
const router = express.Router();

// Simulación de envío de email
router.post("/", (req, res) => {
  const { nombre, email, mensaje } = req.body;
  console.log("Simulando envío de mail...");
  console.log(`Nombre: ${nombre}, Email: ${email}, Mensaje: ${mensaje}`);
  res.json({ mensaje: "Correo enviado correctamente (simulado)" });
});

module.exports = router;
