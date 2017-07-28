const mongoose = require('mongoose');
const config = require('../config');
const Schema = mongoose.Schema;

mongoose.Promise = config.promise;

const productSchema = new Schema({
  name: { type: String, required: [true, 'Name field is required!'], minlength: 1, maxlength: 40 },
  category: { type: String, required: [true, 'Category field is required!'], minlength: 1, maxlength: 40 },
  price: { type: Number, required: [true, 'Price field is required!'], minlength: 1, maxlength: 5  },
  available: { type: Boolean, default: false }
});

module.exports = mongoose.model('products', productSchema);
