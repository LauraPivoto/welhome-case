const express = require('express');
const bodyParser = require('body-parser');
const propertyRoutes = require('./routes/property.routes');

const app = express();
app.use(bodyParser.json());

app.use('/properties', propertyRoutes);

module.exports = app;
