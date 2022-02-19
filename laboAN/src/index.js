const app = require('./config/server');
require('./app/rutas/heroes')(app);

app.listen(app.get("puerto"), () =>console.log(`Servidor escuchando en puerto ${app.get("puerto")}`));