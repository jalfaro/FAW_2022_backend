const mysql = require("mysql");
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Abc12345",
    database: "faw"
});

conn.connect((err) => {
    if (err) {
        console.log("Error en base de datos");
    } else {
        console.log("Conectado a base de datos satisfactoriamente");
    }
});

module.exports = conn;