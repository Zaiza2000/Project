const DataTypes = require("sequelize");
const db = require("../database/db.js");

const Order_Detail = db.define("order_details_1s", {
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
  // orderBy : {
  //   type: DataTypes.INTEGER
  // }
});

module.exports = Order_Detail;
