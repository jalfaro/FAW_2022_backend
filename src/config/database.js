const db = require('mysql');
const conn = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Abc12345',
    database: 'faw'
});

conn.connect((error) => {
    if (error) {
        console.log("Error en el servidor");
    } else {
        console.log("Servidor corriendo en Mysql");
    }
});

module.exports = conn;