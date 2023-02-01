const Province = require("../models/Province.js");
const Amphure = require("../models/Amphure.js");
const District = require("../models/District.js");

exports.listProvince = async (req, res) => {
  try {
    const dataProvince = await Province.findAll();
    res.json(dataProvince);
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};

exports.listAmphure = async (req, res) => {
  try {
    const dataAmphure = await Amphure.findAll({
      where: { province_id: req.params.id },
    });
    res.json(dataAmphure);
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};

exports.listDistrict = async (req, res) => {
  try {
    const dataDistrict = await District.findAll({
      where: { amphure_id: req.params.id },
    });
    res.json(dataDistrict);
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};
