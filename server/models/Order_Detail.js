const DataTypes = require("sequelize");
const db = require("../database/db.js");

const Order_Detail = db.define(
  "order_detail",
  {
    order_detail_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    OID: {
      type: DataTypes.STRING,
    },
    product_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    product_name: {
      type: DataTypes.STRING,
    },
    cost: {
      type: DataTypes.INTEGER,
    },
  },
  { freezeTableName: true }
);

module.exports = Order_Detail;
