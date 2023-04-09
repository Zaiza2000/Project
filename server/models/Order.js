const DataTypes = require("sequelize");
const db = require("../database/db.js");

const Order = db.define("orders", {
  order_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  shipping_firstname: { type: DataTypes.STRING },
  shipping_lastname: { type: DataTypes.STRING },
  shipping_tel: { type: DataTypes.STRING },
  shipping_address: { type: DataTypes.STRING },
  shipping_sub_district: { type: DataTypes.STRING },
  shipping_district: { type: DataTypes.STRING },
  shipping_province: { type: DataTypes.STRING },
  shipping_zipcode: { type: DataTypes.STRING },
  billing_firstname: { type: DataTypes.STRING },
  billing_lastname: { type: DataTypes.STRING },
  billing_tel: { type: DataTypes.STRING },
  billing_address: { type: DataTypes.STRING },
  billing_sub_district: { type: DataTypes.STRING },
  billing_district: { type: DataTypes.STRING },
  billing_province: { type: DataTypes.STRING },
  billing_zipcode: { type: DataTypes.STRING },
  tax_id: { type: DataTypes.STRING },
  payment_photo: { type: DataTypes.STRING },
  id: { type: DataTypes.INTEGER, foreignKey: true },
  status: { type: DataTypes.STRING },
  total_price: { type: DataTypes.INTEGER },
});

Order.associste = (module) => {
  Order.belongsTo(module.User, {
    foreignKey: { allowNull: false },
  });
};

module.exports = Order;
