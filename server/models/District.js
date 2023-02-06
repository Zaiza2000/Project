const DataTypes = require("sequelize");
const db = require("../database/db.js");

const District = db.define("districts", {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  code: { type: DataTypes.STRING },
  name_th: { type: DataTypes.STRING },
  name_en: { type: DataTypes.STRING },
  province_id: { type: DataTypes.INTEGER }
});

module.exports = District;