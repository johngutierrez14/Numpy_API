const express = require('express');
const debug = require('debug')("app:main");

const { Config } = require('./src/config');
const { ProductsAPI } = require('./src/products');
const { Connection } = require('./src/database');

const app = express();

//Midlewares
app.use(express.json());

//Routes
ProductsAPI(app);

app.listen(Config.port, () => {
  debug(`Server on port ${Config.port}`)
});