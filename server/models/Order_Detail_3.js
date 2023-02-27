const DataTypes = require("sequelize");
const db = require("../database/db.js");

const Order_Detail_3 = db.define(
  "order_details_3",
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
  },
  { freezeTableName: true }
);

module.exports = Order_Detail_3;
