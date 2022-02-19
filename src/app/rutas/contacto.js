const conn = require('../../config/database');

module.exports = (app) => {
    //Se usa para consultar
    app.get('/contacto', (req, res) => {
        let query = 'SELECT id, nombre, apellido, telefono, email FROM contacto';
        conn.query(query, (error, filas) => {
            if (error) {
                res.json({status: 0, mensaje: "Error en DB", datos: []});
            } else {
                res.json({status: 1, mensaje: "Contactos obtenidos", datos: filas});
            }
        });
    });
    //Para insertar un valor
    app.post('/contacto', (req, res) => {
        //{nombre: "..", apellido:"..", telefono:"..", email:".."}
        let query = `INSERT INTO contacto (nombre, apellido, telefono, email) VALUES ('${req.body.nombre}', '${req.body.apellido}', '${req.body.telefono}', '${req.body.email}')`;
        conn.query(query, (error, filas) => {
            if (error) {
                res.json({status: 0, mensaje: "Error en DB", datos: []});
            } else {
                res.json({status: 1, mensaje: "Contacto insertado en DB", datos: []});
            }
        });
    });
    //Para modificar un valor
    app.put('/contacto/:id', (req, res) => {
         //{nombre: "..", apellido:"..", telefono:"..", email:".."}
         let query = `UPDATE contacto SET telefono = '${req.body.telefono}', nombre ='${req.body.nombre}', apellido = '${req.body.apellido}', email='${req.body.email}' WHERE id = ${req.params.id}`;
         conn.query(query, (error, filas) => {
             if (error) {
                 res.json({status: 0, mensaje: "Error en DB", datos: []});
             } else {
                 res.json({status: 1, mensaje: "Contacto modificado en DB", datos: []});
             }
         });
    });
    //Eliminar un valor
    app.delete('/contacto/:codigo', (req, res) => {
        let query = `DELETE FROM contacto WHERE id = ${req.params.codigo}`;
        console.log(query);
         conn.query(query, (error, filas) => {
             if (error) {
                 res.json({status: 0, mensaje: "Error en DB", datos: []});
             } else {
                 res.json({status: 1, mensaje: "Contacto eliminado en DB", datos: []});
             }
         });

    });
}