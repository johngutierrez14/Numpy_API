const { Connection } = require('../database');

const getProducts = () => {
  const allProducts = Connection.connection.query('SELECT * FROM products', (err, rows, fields) => {
    if (!err) {
      return (rows)
    } else {
      return (err)
    }
  })
  return allProducts;
};
const getProduct = () => {
  return;
};
const createProduct = () => {
  return;
};
const updateProduct = () => {
  return;
};
const deleteProduct = () => {
  return;
};

module.exports.ProductsService = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
}