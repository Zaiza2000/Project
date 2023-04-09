const DataTypes = require("sequelize");
const db = require("../database/db.js");
const bcrypt = require('bcrypt');
const router = require("../routes/api.js");

const User = db.define("users", {
  firstname: { type: DataTypes.STRING },
  lastname: { type: DataTypes.STRING },
  birthdate: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  tel: { type: DataTypes.STRING },
  username: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
  sub_district: { type: DataTypes.STRING },
  district: { type: DataTypes.STRING },
  province: { type: DataTypes.STRING },
  zipcode: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING },
});

// router.post = async  (next) =>  {
//   try {
//     console.log("call before saving a user")
//   } catch (error){
//     next(error)
//   }
// }

// exports.User = async  (next) =>  {
//   try {
//     console.log("call after saving a user")
//   } catch (error){
//     next(error)
//   }
// }
// User.associate = (models) => {
//   User.hasMany(models.OrderDetail, {
//     onDelete: "RESTRICT",
//     onUpdate: "RESTRICT",
//   });
// };

// User.associate = (models) => {
//   User.hasMany(models.Order, {
//     onDelete: "RESTRICT",
//     onUpdate: "RESTRICT",
//   });
// };

module.exports = User;
