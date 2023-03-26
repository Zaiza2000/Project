//Models
const User = require("../models/User.js");
const Category = require("../models/Category.js");
const Product = require("../models/Product.js");

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
      res.status(500).send("==มีชื่อบัญชีผู้ใช้นี้แล้ว==");
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
          id: user.id,
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







