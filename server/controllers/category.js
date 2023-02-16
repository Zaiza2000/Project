const Category = require("../models/Category.js");

//############ Category.js ################//
exports.listCategory = async (req, res) => {
  try {
    const category = await Category.findAll();
    res.json(category);
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};

exports.getCategory = async (req, res) => {
  try {
    const category = await Category.findAll({
      where: { category_id: req.params.id },
    });
    res.json(category[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};

exports.createCategory = async (req, res) => {
  try {
    await Category.create(req.body);
    res.json({
      message: "Category successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};

exports.editCategory = async (req, res) => {
  try {
    await Category.update(req.body, {
      where: { category_id: req.params.id },
    });
    res.json({
      message: "Update Category  successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    await Category.destroy({
      where: { category_id: req.params.id },
    });
    res.json({
      message: "Delete Category  successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("==Server Error==");
  }
};
