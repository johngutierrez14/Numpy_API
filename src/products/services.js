const { Connection } = require('../database');

const getProducts = () => {
  let sqlAllProducts = "SELECT * FROM company.products";
  Connection.connection.query(sqlAllProducts, (err, result) => {
    if (err) throw err;    
  console.log(result)
  });
}

module.exports.ProductsService = {
  getProducts,
}