const Product = require("../models/productModel");
const Category = require("../models/categoryModel");

const productCtrl = {
    getProducts: async (req, res) => {
        try {
            const product = await Product.find();
            res.json({ product });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    createProduct: async (req, res) => {
        try {
            const { category, name, price, image} = req.body;
            if (!image) {
                return res.status(400).json({ msg: "No image selected!" });
            }
            const categories = await Category.findOne({ category_name: category });
            if (!categories) {
                return res.status(400).json({ msg: "No category selected!" });
            }
            const newProduct = await Product({ product_category: category, product_name: name, product_price: price, product_image: image});
            //   res.json({newProduct})
            await newProduct.save();
            res.json("Create a product!");
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    deleteProduct: async (req, res) => {
        try {
            await Products.findByIdAndDelete(req.params.id);
            res.json("Delete Product!");
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    updateProduct: async (req, res) => {
        try {
            const { category, name, price, image} = req.body;
            if (!image) {
                return res.status(400).json({ msg: "No images selected" });
            }
            await Product.findOneAndUpdate({ _id: req.params.id }, { product_category: category, product_name: name, product_price: price, product_image: image }
            );
            res.json("Update a product!");
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
};
module.exports = productCtrl;