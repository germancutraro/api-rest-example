module.exports = app => {
  // libs
  const Product = require('../models/products');
  // functions
    // Get
    let index = (req, res, next) => {
      res.send('Index!');
    };
    let getProducts = (req, res, next) => {
      Product.find({}).then( docs => res.send(docs)).catch(next);
    };
    // Post
    let createProduct = (req, res, next) => {
      Product.create(req.body).then(product => res.send(`${product.name} created!`)).catch(next);
    };
    // Update
    let updateProduct = (req, res, next) => {
      let id = req.params.productId;
      Product.findByIdAndUpdate(id, req.body).then( product => {
        Product.findOne({_id: id}).then( productUpdated => res.send(`${productUpdated.name} updated!`));
      }).catch(next);
    };
    // Delete
    let deleteProduct = (req, res, next) => {
      Product.findByIdAndRemove(req.params.productId).then( product => res.send(`${product.name} deleted!`)).catch(next);
    };
  // Index
  app.get('/', index);
  // calls
  app.get('/api/products', getProducts);
  app.post('/api/create', createProduct);
  app.put('/api/update/:productId', updateProduct);
  app.delete('/api/delete/:productId', deleteProduct);
};
