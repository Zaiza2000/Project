const Order = require("../models/Order.js");
const Order_detail = require("../models/Order_detail");
const fs = require("fs");

exports.listOrder = async (req, res) => {
  try {
    const order = await Order.findAll();
    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).send("listOrder Server Error");
  }
};

exports.getOrderbyUser = async (req, res) => {
  try {
    const order = await Order.findAll({
      where: { id: rep.body.id },
    });
    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).send("listOrder Server Error");
  }
};
exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findAll({
      where: { order_id: rep.params.id },
    });
    res.json(order[0]);
  } catch (err) {
    console.log(err);
    res.status(500).send("listOrder Server Error");
  }
};

exports.CreateOrder = async (req, res) => {
  try {
    const user_id = req.user.id;
    const fileObj = req.file;
    const orderObj = {
      ...req.body,
      id: user_id,
      payment_photo: fileObj.destination + "/" + fileObj.filename,
    };

    // console.log("Server Body: ", orderObj);
    // console.log("Server File: ", fileObj);
    const orderDBObj = await Order.create(orderObj);
    // console.log("\n\n\n", ">>>> Order DB: ", orderDBObj, "\n\n\n");
    res.json({
      api_value: orderObj,
      message: "Order created successfully",
      order_id: orderDBObj.dataValues.order_id,
    });

    // res.json(orderObj);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send("==CreateOrder Server Error in order.js at line 37 ==");
  }
};

//TODO: status orders
exports.changeStatus = async (req, res) => {
  try {
    const order = await Order.update(req.body, {
      where: { order_id: req.body.order_id },
    });
    res.send(order);
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error (changeStatus-> controllers/order)==");
  }
};


exports.Order_status = async (req, res) => {
  try {
    const db = require('../database/db.js')
    const { QueryTypes } = require('sequelize');
    
    console.log("Req.body: ", req.body);
    
    const Order_status = await db.query(
      `SELECT * FROM order_detail INNER JOIN orders ON orders.order_id = order_detail.order_id WHERE orders.order_id = ${req.body.order_id} LIMIT 1` , { type: QueryTypes.SELECT });
      
      console.log("Order_status");
      console.log(Order_status);
      
    res.send(Order_status);
  } catch (err) {
    console.log(err);
    res.status(500).send("== Server Error (Order_status) at server contoller/order.js ==");
  }
};

exports.Order_status_by_OID = async (req, res) => {
  try {
    const db = require('../database/db.js')
    const { QueryTypes } = require('sequelize');
    
    console.log("Req.body: ", req.body);
    
    const Order_status = await db.query(
      `SELECT * FROM order_detail INNER JOIN orders ON orders.order_id = order_detail.order_id WHERE OID = '${req.params.OID}' LIMIT 1` , { type: QueryTypes.SELECT });
      
      console.log("Order_status");
      console.log(Order_status);
      
    res.send(Order_status);
  } catch (err) {
    console.log(err);
    res.status(500).send("== Server Error (Order_status) at server contoller/order.js ==");
  }
};


