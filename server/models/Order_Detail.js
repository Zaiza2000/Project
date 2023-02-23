const DataTypes = require("sequelize");
const db = require("../database/db.js");

const Order_Detail = db.define("order_details", {
  order_detail_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  products: [
    {
      product: {
        type: DataTypes.INTEGER,
      },
      count: {
        type: DataTypes.NUMBER,
      },
      price: {
        type: DataTypes.INTEGER,
      },
    },
  ],
  cartTotal: {
    type: DataTypes.INTEGER,
  },
  id : {
    type: DataTypes.INTEGER,
    ref: "users"
  }
});

module.exports = Order_Detail;
