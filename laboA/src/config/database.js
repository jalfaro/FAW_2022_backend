const sql = require('mysql');
const conn = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "Abc12345",
    database: "faw"
});

conn.connect((err) => {
    if (err) {
        console.log("error en la connecion al servidor");
    } else {
        console.log("Connectado al servidor de base de datos");
    }
});

module.exports = conn;