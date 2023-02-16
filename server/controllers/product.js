const Product = require("../models/Product.js")

//############ Product.js ################//
exports.listProduct = async (req, res) => {
    try {
      const product = await Product.findAll();
      res.send(product);
    } catch (error) {
      console.log(error);
      res.status(500).send("==Server Error==");
    }
  };
  
  exports.getProduct = async (req, res) => {
    try {
      const product = await Product.findAll({
        where: { product_id: req.params.id },
      });
      res.json(product[0]);
    } catch (error) {
      console.log(error);
      res.status(500).send("==Server Error==");
    }
  };
  
  exports.createProduct = async (req, res) => {
    try {
      await Product.create(req.body);
      res.json({
        message: "Product successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send("==Server Error==");
    }
  };
  
  exports.editProduct = async (req, res) => {
    try {
      await Product.update(req.body, {
        where: { product_id: req.params.id },
      });
      res.json({
        message: "Update Product  successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send("==Server Error==");
    }
  };
  
  exports.deleteProduct = async (req, res) => {
    try {
      await Product.destroy({
        where: { product_id: req.params.id },
      });
      res.json({
        message: "Delete Product  successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send("==Server Error==");
    }
  };