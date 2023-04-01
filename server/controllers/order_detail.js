const Order_detail = require("../models/Order_detail");
const { Op, Sequelize } = require("sequelize");


exports.listOrderDetail = async (req, res) => {
  try {
    const orderDetail = await Order_detail.findAll();
    res.send(orderDetail);
  } catch (err) {
    console.log(err);
    res.status(500).send("==Server Error (listOrderDetail) ==");
  }
};

exports.listOrderDetailByOID = async (req, res) => {
  try {
    const orderDetail = await Order_detail.findAll({
      attributes: [
        "OID",
        "product_id",
        "product_name",
        "product_detail",
        "price",
        "quantity",
        "cost",
        [Sequelize.fn("count", Sequelize.col("OID")), "count"],
      ],
      raw: true,
      group: ["order_detail.OID"],
      order: ["OID", "product_id", "product_name", "price", "quantity", "cost", "product_detail",],
    });
    res.send(orderDetail);
  } catch (err) {
    console.log(err);
    res.status(500).send("==Server Error (listOrderDetailByOID) ==");
  }
};

exports.listOrderDetailByUser = async (req, res) => {
  try {
    const db = require('../database/db.js')
    const { QueryTypes } = require('sequelize');
    const order_detail_list = await db.query(
      "SELECT "
      + "OID, id, product_id, product_name, quantity, price, product_detail, order_id, status"
      + " FROM `order_detail` WHERE id = "
      + req.params.id
      , { type: QueryTypes.SELECT });
    // console.log("order_detail_list");
    // console.log(order_detail_list);

    res.send(order_detail_list);
  } catch (err) {
    console.log(err);
    res.status(500).send("== Server Error (listOrderDetailByUser) at server contoller ==");
  }
};



//TODO:Fix



exports.Order_detail_join_Orders = async (req, res) => {
  try {
    const db = require('../database/db.js')
    const { QueryTypes } = require('sequelize');
    const order_detail_list = await db.query(
      "SELECT * FROM order_detail INNER JOIN orders ON orders.order_id = order_detail.order_id WHERE orders.id = " + req.params.id, { type: QueryTypes.SELECT });

    console.log("order_detail_list");
    console.log(order_detail_list);

    res.send(order_detail_list);
  } catch (err) {
    console.log(err);
    res.status(500).send("== Server Error (Order_detail_join_Orders) at server contoller ==");
  }
};

exports.get_order_detail_by_oid = async (req, res) => {
  try {
    const db = require('../database/db.js')
    const { QueryTypes } = require('sequelize');
    console.log("\n\n\n================== Check ========================\n\n\n");
    console.log(req.params);
    const order_detail_list = await db.query(
      `SELECT * FROM order_detail INNER JOIN orders ON orders.order_id = order_detail.order_id WHERE orders.id = ${req.params.id} AND order_detail.OID = '${req.params.OID}' LIMIT 1`, { type: QueryTypes.SELECT });

    console.log("order_detail_list");
    console.log(order_detail_list);

    res.send(order_detail_list);
  } catch (err) {
    console.log(err);
    res.status(500).send("== Server Error (Order_detail_join_Orders) at server contoller ==");
  }
};



exports.getOrderDetail = async (req, res) => {
  try {
    console.log(req.params);
    const orderDetail = await Order_detail.findAll({
      where: { OID: { [Op.like]: req.params.id } },
    });
    res.json(orderDetail);
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error (getRequisition) ==");
  }
};