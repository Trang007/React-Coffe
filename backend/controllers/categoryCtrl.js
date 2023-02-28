const Category = require("../models/categoryModel");
const Product = require("../models/productModel");
const categoryCtrl = {
  getCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  createCategory: async (req, res) => {
    try {
      const { name } = req.body;
      const category = await Category.findOne({ category_name: name });
      if (category)
        return res.status(400).json({ msg: "The name already exists" });
      const newCategory = await Category({ category_name: name });
      res.json({newCategory});
      // await newCategory.save();
      // res.json("Create category complete!");
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const products = await Product.findOne({ categories: req.params.id });
      if (products) 
        return res.status(400).json({ msg: "Delete all product" });
      await Category.findByIdAndDelete(req.params.id);
      res.json("Delete category complete!");
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  updateCategory: async (req, res) => {
    try {
      const { name } = req.body;
      await Category.findOneAndUpdate({ _id: req.params.id }, { name });
      res.json("Update category complete!");
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};
module.exports = categoryCtrl;