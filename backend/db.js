const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'joaco_user', // tu nuevo usuario
  password: '1234',   // la contraseña que pusiste
  database: 'mi_proyecto_db'
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la DB:', err);
    return;
  }
  console.log('Conectado a la DB');
});

module.exports = connection;
