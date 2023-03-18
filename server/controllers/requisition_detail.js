const Requisition_Detail = require("../models/Requisition_Detail");
const { Op } = require("sequelize");

exports.listRequisition = async (req, res) => {
  try {
    const requisition = await Requisition_Detail.findAll();
    res.send(requisition);
  } catch (err) {
    console.log(err);
    res.status(500).send("==Server Error (listRequisition) ==");
  }
};

exports.getRequisition = async (req, res) => {
  try {
    console.log(req.params);
    const requisition = await Requisition_Detail.findAll({
      where: { RID: { [Op.like]: req.params.id } },
    });
    res.json(requisition);
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error (getRequisition) ==");
  }
};
