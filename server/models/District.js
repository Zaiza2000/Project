const DataTypes = require("sequelize");
const db = require("../database/db.js");

const District = db.define("districts", {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  zip_code: { type: DataTypes.INTEGER },
  name_th: { type: DataTypes.STRING },
  name_en: { type: DataTypes.STRING },
  amphure_id: { type: DataTypes.INTEGER }
});

module.exports = District;