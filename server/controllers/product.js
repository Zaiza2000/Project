const Product = require("../models/Product.js");
const Category = require("../models/Category.js");


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

//############ Search  ################


const handleQuery = async (req, res) => {
  try {
    const product_name = req.body;
    const product_detail = req.body;
    const { Op } = require("sequelize");
    const products = await Product.findAll({
      where: {
        [Op.or]: [
          {
            product_name: {
              [Op.substring]: [product_name.query]
            }
          },
          {
            product_detail: {
              [Op.substring]: [product_detail.query]
            }
          }
        ]
      }
    });
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};
const handlePrice = async (req, res, price) => {
  try {
    const product_sale = req.body;
    const { Op } = require("sequelize");
    const products = await Product.findAll({
      where: {
        product_sale: {
          [Op.gte]: product_sale.price[0],
          [Op.lte]: product_sale.price[1],
        }
      }
    });
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
}
const handleCategory = async (req, res, category) => {
  try {
    const category_id = req.body;
    const products = await Product.findAll({
      where: { category_id: category_id.category }
    });
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};
exports.searchFilters = async (req, res) => {
  const { query, price, category } = req.body;
  if (query) {
    console.log("query", query);
    await handleQuery(req, res, query);
  }
  // price [0, 200]
  if (price !== undefined) {
    console.log("price----->", price);
    await handlePrice(req, res, price);
  }
  if (category) {
    console.log("category", category);
    await handleCategory(req, res, category);
  }
};
