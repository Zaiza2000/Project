const Province = require("../models/Province.js");
const District = require("../models/District.js");
const SubDistrict = require("../models/SubDistrict.js");

exports.listProvince = async (req, res) => {
  try {
    const dataProvince = await Province.findAll();
    res.json(dataProvince);
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};

exports.listDistrict = async (req, res) => {
  try {
    const dataDistrict = await District.findAll({
      where: { province_id: req.params.id },
    });
    res.json(dataDistrict);
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};

exports.listSubDistrict = async (req, res) => {
  try {
    const dataSubDistrict = await SubDistrict.findAll({
      where: { district_id: req.params.id },
    });
    res.json(dataSubDistrict);
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};


