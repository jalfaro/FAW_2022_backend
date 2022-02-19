const app = require('./config/server');
require('./app/rutas/contacto')(app);

app.listen(app.get("puerto"), () => console.log(`Servidor corriendo en puerto ${app.get("puerto")}`))