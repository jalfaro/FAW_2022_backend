const express = require('express');
const app = express();
app.use(express.json());
app.set("puerto", 5001);

module.exports = app;