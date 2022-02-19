const conn = require('../../config/database');
module.exports= (app) => {
    //Para obtener datos
    app.get('/laboratorio', (req, res) => {
        let consulta = "SELECT id, nombre, fecha FROM laboratorio";
        conn.query(consulta, (err, filas) => {
            if (err) {
                res.json({status: 0, mensaje: "Error en la consulta", datos:[]});
            } else {
                res.json({status: 1, mensaje: "Consulta satisfactoria", datos:filas});
            }
        });
    });
    //Obtiene un laboratorio en particular
    app.get('/laboratorio/:tuti', (req, res) => {
        let consulta = `SELECT id, nombre, fecha FROM laboratorio WHERE id = ${req.params.tuti}`;
        console.log(consulta);
        conn.query(consulta, (err, filas) => {
            if (err) {
                res.json({status: 0, mensaje: "Error en la consulta", datos:[]});
            } else {
                if (filas.length > 0) {
                    res.json({status: 1, mensaje: "Consulta satisfactoria", datos:filas[0]});
                } else {
                    res.json({status: 1, mensaje: "No existe ese laboratorio", datos:[]});
                }
                
            }
        });
    });
    //PAra inserrtar datos
    app.post('/laboratorio', (req, res) => {
        let consulta = `INSERT INTO laboratorio (nombre, fecha) VALUES ('${req.body.nombre}', '${req.body.fecha}')`;
        conn.query(consulta, (err, filas) => {
            if (err) {
                res.json({status: 0, mensaje: "Error en la insercion", datos:[]});
            } else {
                res.json({status: 1, mensaje: "Insertado satisfactoriamente", datos:[]});
            }
        });
    });
    //Modificar datos
    app.put('/laboratorio', (req, res) => {
        res.json({mensaje: "PUT"});
    });
    //Borrar datos
    app.delete('/laboratorio', (req, res) => {
        res.json({mensaje: "DELETE"});
    });
}