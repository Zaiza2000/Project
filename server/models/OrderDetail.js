// const DataTypes = require("sequelize");
// const db = require("../database/db.js");

// const OrderDetail = db.define("order_detail", {
//   order_detail_id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   order_quantity: { type: DataTypes.STRING },
//   total_price: { type: DataTypes.INTEGER },
//   id: { type: DataTypes.INTEGER, foreignKey: true },
//   order_id: { type: DataTypes.INTEGER, foreignKey: true },
//   product_id: { type: DataTypes.INTEGER, foreignKey: true },
// });

// OrderDetail.associste = (module) => {
//   OrderDetail.belongsTo(module.User, {
//     foreignKey: { allowNull: false },
//   });
//   OrderDetail.belongsTo(module.Product, {
//     foreignKey: { allowNull: false },
//   });

// };

// module.exports = OrderDetail;
