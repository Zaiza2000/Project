const Requisition_Detail = require("../models/Requisition_Detail");
const { Op, Sequelize } = require("sequelize");

exports.listRequisition = async (req, res) => {
  try {
    const requisition = await Requisition_Detail.findAll();
    res.send(requisition);
  } catch (err) {
    console.log(err);
    res.status(500).send("==Server Error (listRequisition) ==");
  }
};

exports.listRequisitionByRID = async (req, res) => {
  try {
    const requisition = await Requisition_Detail.findAll({
      attributes: [
        "RID",
        "product_id",
        "product_name",
        "product_detail",
        "price",
        "quantity",
        [Sequelize.fn("count", Sequelize.col("RID")), "count"],
      ],
      raw: true,
      group: ["requisition_detail.RID"],
      order: ["RID", "product_id", "product_name", "price", "quantity","product_detail"],
    });
    res.send(requisition);
  } catch (err) {
    console.log(err);
    res.status(500).send("==Server Error (listRequisitionByRID) ==");
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
