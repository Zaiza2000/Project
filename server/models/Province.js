const DataTypes = require("sequelize");
const db = require("../database/db.js");

const Province = db.define("Provinces", {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  code: { type: DataTypes.STRING },
  name_th: { type: DataTypes.STRING },
  name_en: { type: DataTypes.STRING },
  geography_id: { type: DataTypes.INTEGER }
});

module.exports = Province;