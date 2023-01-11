const DataTypes = require("sequelize");
const db = require("../database/db.js");
// const category = require("Category.js");
// const Category = require("./Category.js");


const Product = db.define("products", {
  product_id : {type: DataTypes.INTEGER, autoIncrement: true,primaryKey: true},
  product_name: { type: DataTypes.STRING },
  product_cost: { type: DataTypes.INTEGER },
  product_sale: { type: DataTypes.INTEGER },
  product_photo: { type: DataTypes.STRING },
  product_detail: { type: DataTypes.STRING },
  product_num: { type: DataTypes.INTEGER },
  product_promotion : { type: DataTypes.STRING },
  category_id: { type: DataTypes.INTEGER, foreignKey: true },
});

 Product.associste = module =>{
  Product.belongsTo(module.Category, {
    foreignKey : {allowNull :false},
  });
 }

// category.Category.belongsTo(Product);
// Product.belongsTo(Category.Category, { foreignKey: "category_id" });

module.exports = Product;
