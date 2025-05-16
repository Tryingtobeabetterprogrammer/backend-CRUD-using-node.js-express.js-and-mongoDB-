const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter the name of the product'],
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: String,
        required: true,
        default: 0
    },
    image: {
        type: String,
        required: false,
    },
}, {
    Timestamp: true,
})

const product= mongoose.model('Product', productSchema);
module.exports = product;