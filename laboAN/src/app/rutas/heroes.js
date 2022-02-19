const conn = require("../../config/database")

module.exports = (app) => {
    // Consultar informacion (SELECT)
    app.get('/heroe', (req, res) => {
        let consulta = "SELECT id, identidad_secreta, nombre_heroe, ciudad from marvel";
        conn.query(consulta, (err, filas) => {
            if (err) {
                res.json({status: 0, mensaje: "Error en consulta", datos: []});
            } else {
                res.json({status: 1, mensaje: "Consulta satisfactoria", datos: filas}); 
            }
        });
    });
    app.get('/heroe/:id', (req, res) => {
        let consulta = `SELECT id, identidad_secreta, nombre_heroe, ciudad from marvel WHERE id = ${req.params.id}`;
        conn.query(consulta, (err, filas) => {
            if (err) {
                res.json({status: 0, mensaje: "Error en consulta", datos: []});
            } else {
                if (filas.length > 0) {
                    res.json({status: 1, mensaje: "Consulta satisfactoria", datos: filas[0]}); 
                } else {
                    res.json({status: 0, mensaje: "No existe el heroe", datos: []}); 
                }
            }
        });
    });
    // Insertar informacion (INSERT)
    app.post('/heroe', (req, res) => {
        let consulta = `INSERT INTO marvel (identidad_secreta, nombre_heroe, ciudad) VALUES 
        ('${req.body.nombre}', '${req.body.heroe}', '${req.body.ciudad}')`;
        conn.query(consulta, (err, filas) => {
            if (err) {
                res.json({status: 0, mensaje: "Error en insercion", datos: []});
            } else {
                res.json({status: 1, mensaje: "Dato insertado satisfactoriamente", datos:[]}); 
            }
        });
    });
    //Modificar informacion (UPDATE)
    app.put('/heroe', (req, res) => {
        res.json({status:1, method: "PUT"});
    });
    //Borrar informacion (DELET)
    app.delete('/heroe/:id', (req, res) => {
        let consulta = `DELETE FROM marvel WHERE id = ${req.params.id}`;
        console.log(consulta);
        conn.query(consulta, (err, filas) => {
            if (err) {
                res.json({status: 0, mensaje: "Error en la eliminacion", datos: []});
            } else {
                res.json({status: 1, mensaje: "Dato eliminado satisfactoriamente", datos:[]}); 
            }
        });
    });
}