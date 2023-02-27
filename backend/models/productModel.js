const mongoose = require('mongoose');
var productSchema = new mongoose.Schema(
    {
        product_category: {
            type: String,
            require: true,
        },
        product_name: {
            type: String,
            require: true,
        },
        product_price: {
            type: String,
            require: true,
        },
        product_image: {
            type: String,
            require: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);