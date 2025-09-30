const express = require('express');
const bodyParser = require('body-parser');
const propertyRoutes = require('./routes/property.routes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/properties', propertyRoutes);

module.exports = app;
