//Models
const User = require("../models/User.js");
const Category = require("../models/Category.js");
const Product = require("../models/Product.js");
const OrderDetail = require("../models/OrderDetail.js");

// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../database/db.js");

//############ User.js ################//
exports.listUser = async (req, res) => {
  try {
    const user = await User.findAll();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findAll({
      where: { id: req.params.id },
    });
    res.json(user[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};

exports.createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.json({
      message: "Registor successfully",
    });
  } catch (error) {
    // console.log(Object.keys(error));
    console.log(error.name);
    console.log(error);
    if (error.name == "SequelizeUniqueConstraintError") {
      res.status(500).send("==MySQL Unique Error==");
    } else {
      res.status(500).send("==Server Error==");
    }
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    var user = await User.findOne({
      where: { username: username, password: password },
    });
    if (user) {
      // console.log(user.username);
      // console.log(username);
      // res.send("Hello Login!");

      //Payload
      const payload = {
        user: {
          username: user.username,
          role: user.role,
        },
      };
      //Generate Token
      jwt.sign(payload, "jwtSecret", { expiresIn: 3600 }, (error, token) => {
        if (error) throw error;
        res.json({ token, payload });
      });
    } else {
      return res.status(400).send("User not found!!!");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};

exports.currentUser = async (req, res) => {
  try {
    console.log("currentUser", req.user);

    const user = await User.findOne(req.body, {
      where: { username: req.params.username },
    });

    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};

exports.editUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "Update User successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};

exports.changeRole = async (req, res) => {
  try {
    const user = await User.update(req.body, {
      where: { id: req.body.id },
    });
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: { id: req.params.id },
    });
    //console.log("deleteUser" , user);
    res.json("DeleteUser");
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};

exports.userCart = async (req, res) => {
  try {
    const {cart} =req.body;
    console.log(cart);
    console.log(req.body);
   res.json('user cart OKEY.')
  } catch (error) {
    console.log(error);
    res.status(500).send("==userCart Server Error==");
  }
};

//############ Category.js ################//
exports.listCategory = async (req, res) => {
  try {
    const category = await Category.findAll();
    res.json(category);
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};

exports.getCategory = async (req, res) => {
  try {
    const category = await Category.findAll({
      where: { category_id: req.params.id },
    });
    res.json(category[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};

exports.createCategory = async (req, res) => {
  try {
    await Category.create(req.body);
    res.json({
      message: "Category successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};

exports.editCategory = async (req, res) => {
  try {
    await Category.update(req.body, {
      where: { category_id: req.params.id },
    });
    res.json({
      message: "Update Category  successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    await Category.destroy({
      where: { category_id: req.params.id },
    });
    res.json({
      message: "Delete Category  successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};

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

//############ Search ################//

const handleQuery = async (req, res, query) => {
  let product = await Product.find({$text:{ $search:query}})
  // .populate("category", "product_id", "product_name")
  res.send(product);
}

exports.searchFilters = async (req, res) => {
  const {query} = req.body;
  if(query){
    console.log("Query" ,query);
    await handleQuery(req, res, query);
  }
}



