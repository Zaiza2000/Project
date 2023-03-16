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
    console.log(">>> req on order.js: ", req);
    const fileObj = req.file;
    const fileStorage = {
      destination: "./public/uploads",
      file: fileObj,
      filename:
        "file-" +
        Date.now() +
        "." +
        fileObj.originalname.split(".")[
          fileObj.originalname.split(".").length - 1
        ],
    };

    // console.log(file);
    console.log("Server Body: ", req.body);
    console.log("Server File: ", fileObj);
    fs.writeFileSync(
      fileStorage.destination + "/" + fileStorage.filename,
      fileStorage.file.buffer
    );
    console.log(fileStorage.filename + " Created!!");
    // await Order.create(req.body)
    res.json({
      message: "Order created successfully",
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send("==CreateOrder Server Error in order.js at line 37 ==");
  }
};
