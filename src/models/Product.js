// import node modules
const { Schema, model } = require('mongoose');

// schema
const ProductSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, default: 0 },
    disposition: { type: Number }
});

// model
module.exports = model('Product', ProductSchema);