const debug = require('debug')('app:module-products-controlers');
const { ProductsService } = require('./services')

module.exports.ProductsController = {
  getProducts: async (req, res) => {
    try { 
      let products = await ProductsService.getProducts()
      res.json(products)
    } catch (error) {
      debug(error);
      res.status(500).json({message: "Internal server error"});
    }
  },
  getProduct: (req, res) => {
    res.send('Get one produst');
  },
  createProduct: (req, res) => {
    res.send('Create one produst');
  },
}