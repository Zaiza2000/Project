const Order = require("../models/Order.js");
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

    console.log("Server Body: ", orderObj);
    console.log("Server File: ", fileObj);
    await Order.create(orderObj);
    res.json({
      api_value: orderObj,
      message: "Order created successfully",
    });
    // res.json(orderObj);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send("==CreateOrder Server Error in order.js at line 37 ==");
  }
};
