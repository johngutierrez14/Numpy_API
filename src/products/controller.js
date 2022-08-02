const debug = require('debug')('app:module-products-controlers');
const { ProductsService } = require('./services');
const { Connection } = require('../database')

module.exports.ProductsController = {
  getProducts: (req, res) => {
    // Connection.connection.query('SELECT * FROM products', (err, rows, fields) => {
    //   if (!err) {
    //     res.send(rows)
    //   } else {
    //     debug(err)
    //   }
    // })
    const products = ProductsService.getProducts();
    res.send(products);
  },
  getProduct: (req, res) => {
    const product = ProductsService.getProduct();
    res.send('Get one produst');
  },
  createProduct: (req, res) => {
    const createProduct = ProductsService.createProduct();
    res.send('Create one produst');
  },
  updateProduct: (req, res) => {
    const updateProduct = ProductsService.updateProduct();
    res.send('Update one produst');
  },
  deleteProduct: (req, res) => {
    const deleteProduct = ProductsService.deleteProduct();
    res.send('Delete one produst');
  },
}