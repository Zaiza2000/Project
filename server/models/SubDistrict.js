const DataTypes = require("sequelize");
const db = require("../database/db.js");

const SubDistrict = db.define("sub_districts", {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  zip_code: { type: DataTypes.INTEGER },
  name_th: { type: DataTypes.STRING },
  name_en: { type: DataTypes.STRING },
  district_id: { type: DataTypes.INTEGER }
});

module.exports = SubDistrict;