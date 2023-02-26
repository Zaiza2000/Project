//Models
const User = require("../models/User.js");
const Category = require("../models/Category.js");
const Product = require("../models/Product.js");
// const OrderDetail = require("../models/OrderDetail.js");
const Order_Detail = require("../models/Order_Detail.js");

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
          id : user.id,
          username: user.username,
          role: user.role,
          firstname: user.firstname,
          lastname: user.lastname,
          address: user.address,
          sub_district: user.sub_district,
          district: user.district,
          province: user.province,
          zipcode: user.zipcode,
          tel: user.tel,
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

exports.adminCart = async (req, res) => {
  try {
    const { cartAdmin } = req.body;
    console.log(cartAdmin);
    console.log(req.body);
    res.json("Admin cart OKEY.");
  } catch (error) {
    console.log(error);
    res.status(500).send("==userCart Server Error==");
  }
};

//############ cart ################//

// exports.userCart = async (req, res) => {
//   try {
//     const {cart} =req.body;
//     console.log("cart =>" ,cart);

//    res.json('user cart OKEY.')
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("==userCart Server Error==");
//   }
// };

//############ cart ################//

exports.userCart = async (req, res) => {
  try {
    const { cart } = req.body;

    let users = await User.findOne(req.body, {
      where: { username: req.params.username },
    });
    let products = [];
    // let cartOld = await Order_Detail.findOne({
    //   where: { id: users.id },
    // });
    // if (cartOld) {
    //   cartOld.remove();
    // }
    for (let i = 0; i < cart.length; i++) {
      let object = {};
      object.product = cart[i].product_id;
      object.count = cart[i].count;
      object.price = cart[i].product_sale;

      products.push(object);
    }
    console.log("products", products);
    let cartTotal = 0;
    for (let i = 0; i < products.length; i++) {
      cartTotal = cartTotal + products[i].price * products[i];
    }

    let newCart = await new Order_Detail({
      products,
      cartTotal,
      id:users.id
    }).save();

    res.json("user cart OKEY.");
    console.log("newCart", newCart);
  } catch (error) {
    console.log(error);
    res.status(500).send("==userCart Server Error==");
  }
};

//############ Search ################//
// exports.getSearchCategory = async (req, res) => {
//   try {
//     const category_name = req.body
//     console.log("category_name : " , category_name);
//     const category = await Category.findAll({
//       where: { category_name: category_name },
//     });
//     res.json(category);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("==Server Error==");
//   }
// };

//############ Search by Roitai ################//
// const handleQuery = async (req, res, query) => {
//   let products = await Product.find({ $text: { $search: query } })
//   .populate("category_name", "product_id product_name product_detail")
//   res.send(products);
// }
// const handlePrice = async (req, res, price) => {
//   let products = await Product.find({
//     price:{
//       $gte:price[0],
//       $lte:price[1]
//     }
//   })
//   .populate("category_name", "product_id product_name")
//   res.send(products);
// }

// exports.searchFilters = async (req, res) => {
//   const {query, price} = req.body;
//   if(query){
//     console.log("Query" ,query);
//     await handleQuery(req, res, query);
//   }
//   if (price !== undefined) {
//     console.log("price---->", price);
//     await handlePrice(req, res, price);
//   }
// }
