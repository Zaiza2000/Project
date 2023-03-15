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

//############ Search by Roitai ################

// const handleQuery = async (req, res, query) => {
//   let products = await Product.find({ $text: { $search: query } }).populate(
//     "category_name",
//     "product_id product_name product_detail"
//   );
//   res.send(products);
// };

// const getSearchCategory = async (req, res) => {
//     try {
//     const category_name = req.body
//     console.log("category_name : " , category_name);
//     const category = await Category.findAll({
//       query: { category_name },
//     });
//     res.json(category);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("==Server Error==");
//   }
// };
const handleQuery = async (req, res) => {
  try {
    const product_name = req.body;
    // const { Op } = app.Sequelize;
    // console.log("product_name : " , product_name);
    const products = await Product.findAll({
      // where: {
      //   product_name: {
      //     [Op.substring]: product_name.query
      //   }
      // }

       where: { product_name: product_name.query }
    });
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};
exports.searchFilters = async (req, res) => {
  const { query } = req.body;
  if (query) {
    console.log("query", query);
    await handleQuery(req, res, query);
  }
};
