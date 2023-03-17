//Models
const Order_Detail = require("../models/Order_Detail.js");
const Requisition_Detail = require("../models/Requisition_Detail.js");
const User = require("../models/User.js");
// Import our utils
const { get_latest_order_id } = require("../utils/order_utiils");
const { get_latest_requisition_id } = require("../utils/requisition_utiils");

exports.userCart = async (req, res) => {
  try {
    console.log("----------------", req.body);
    const { cart } = req.body;
    console.log("\n\n>>> Cart: ", cart, "\n\n");

    let users = await User.findOne(req.body, {
      where: { id: req.params.id },
    });

    const new_order_id = get_latest_order_id();

    for (let i = 0; i < cart.length; i++) {
      console.log("Cart[", i, "] = ", cart[i]);
      var newCart = await new Order_Detail({
        OID: new_order_id,
        product_id: cart[i].product_id,
        quantity: cart[i].count,
        price: cart[i].product_sale,
        id: req.user.id,
        order_id: cart.order_id,
      }).save();
      console.log("newCart", newCart);
    }

    let cartTotal = 0;
    for (let i = 0; i < cart.length; i++) {
      cartTotal = cartTotal + cart[i].product_sale * cart[i].count;
    }

    res.json({
      api_values: newCart,
      message: "user cart OKEY.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("==userCart Server Error==");
  }
};

exports.adminCart = async (req, res) => {
  try {
    const { cartAdmin } = req.body;

    let users = await User.findOne(req.body, {
      where: { id: req.params.id },
    });

    const new_requisition_id = get_latest_requisition_id();

    for (let i = 0; i < cartAdmin.length; i++) {
      let newAdminCart = await new Requisition_Detail({
        RID: new_requisition_id,
        product_id: cartAdmin[i].product_id,
        quantity: cartAdmin[i].count,
        price: cartAdmin[i].product_cost,
        id: req.user.id,
      }).save();
      console.log("newAdminCart", newAdminCart);
    }

    res.json("AdminCart cart OKEY.");
  } catch (error) {
    console.log(error);
    res.status(500).send("==userCart Server Error==");
  }
};
