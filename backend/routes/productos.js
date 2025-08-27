const express = require("express");
const router = express.Router();
const db = require("../db");

// Leer todos los productos
router.get("/", (req, res) => {
  db.query("SELECT * FROM productos", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results); // devuelve un array de productos
  });
});

// Crear producto
router.post("/", (req, res) => {
  const { nombre, precio } = req.body;
  db.query(
    "INSERT INTO productos (nombre, precio) VALUES (?, ?)",
    [nombre, precio],
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.json({ id: results.insertId, nombre, precio });
    }
  );
});

// Actualizar producto
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, precio } = req.body;
  db.query(
    "UPDATE productos SET nombre=?, precio=? WHERE id=?",
    [nombre, precio, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ id, nombre, precio });
    }
  );
});

// Borrar producto
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM productos WHERE id=?", [id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ mensaje: "Producto eliminado" });
  });
});

module.exports = router;
