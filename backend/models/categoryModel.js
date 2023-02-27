const mongoose = require('mongoose');
var categorySchema = new mongoose.Schema(
    {
        category_name: {
            type: String,
            require: true,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Category', categorySchema);