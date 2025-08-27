import { useEffect, useState } from "react";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [editId, setEditId] = useState(null);

  const API_URL = "http://localhost:3001/api/productos";

  const fetchProductos = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  const handleAgregar = (e) => {
    e.preventDefault();
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, precio }),
    }).then(() => {
      setNombre("");
      setPrecio("");
      fetchProductos();
    });
  };

  const handleEditar = (producto) => {
    setEditId(producto.id);
    setNombre(producto.nombre);
    setPrecio(producto.precio);
  };

  const handleActualizar = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, precio }),
    }).then(() => {
      setEditId(null);
      setNombre("");
      setPrecio("");
      fetchProductos();
    });
  };

  const handleBorrar = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" }).then(() =>
      fetchProductos()
    );
  };

  return (
    <div className="productos-container">
      <h1 className="productos-titulo">Productos</h1>
      <form
        className="productos-form"
        onSubmit={editId ? handleActualizar : handleAgregar}
      >
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
        <button type="submit" className="btn">{editId ? "Actualizar" : "Agregar"}</button>
        {editId && (
          <button
            type="button"
            className="btn cancelar"
            onClick={() => { setEditId(null); setNombre(""); setPrecio(""); }}
          >
            Cancelar
          </button>
        )}
      </form>

      <ul className="productos-lista">
        {productos.map((p) => (
          <li key={p.id} className="productos-item">
            <span>{p.nombre} - ${p.precio}</span>
            <div className="productos-acciones">
              <button className="btn editar" onClick={() => handleEditar(p)}>Editar</button>
              <button className="btn borrar" onClick={() => handleBorrar(p.id)}>Borrar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;
