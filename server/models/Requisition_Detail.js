const DataTypes = require("sequelize");
const db = require("../database/db.js");

const Requisition_Detail = db.define(
  "requisition_detail",
  {
    requisition_detail_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    RID: {
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
  },
  { freezeTableName: true }
);

module.exports = Requisition_Detail;
