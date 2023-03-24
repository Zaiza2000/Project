//Models
const Order_Detail = require("../models/Order_Detail.js");
const Requisition_Detail = require("../models/Requisition_Detail.js");
const User = require("../models/User.js");
const Product = require("../models/Product.js");
// Import our utils
const { get_latest_order_id } = require("../utils/order_utiils");
const { get_latest_requisition_id } = require("../utils/requisition_utiils");


//ตัดสต๊อกสินค้า
exports.CartUpdateToProduct = async (req,res) =>{
  try {
    const carts = req.body.cart;
    console.log("\n\n>>> CartUpdateToProduct: ", carts, "\n\n");

    carts.map((item )=>{
      // console.log("====>>>>> product id" , item.product_id);
      const product =  Product.findByPk(item.product_id)
      product.then((productItem) => {
        productItem.update({"product_quantity" : productItem.product_quantity - item.count})
      })
      // console.log("====>>>>> product After") 
      product.then((res) => {
        console.log("Previous: ", res._previousDataValues);
        console.log("Current: ", res.dataValues);
      });

    })
    
    res.json({ 
      message: "CartUpdateToProduct",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("==CartUpdateToProduct Server Error==");
  }
};



exports.userCart = async (req, res) => {
  try {
    // console.log("----------------\n", req.body);
    const { cart } = req.body;
    console.log("\n\n>>> Cart: ", cart, "\n\n");

    const new_order_id = get_latest_order_id();

    console.log("Before cart[i] Object: ", cart);
    for (let i = 0; i < cart.length; i++) {
      console.log("Cart[", i, "] = ", cart[i]);
      var newCart = await new Order_Detail({
        OID: new_order_id,
        product_id: cart[String(i)].product_id,
        product_name: cart[String(i)].product_name,
        product_detail: cart[String(i)].product_detail,
        quantity: cart[String(i)].count,
        cost: cart[String(i)].product_cost,
        price: cart[String(i)].product_sale,
        id: req.user.id,
        order_id: cart[String(i)].order_id,
      }).save();
      console.log("newCart", newCart);
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
    
    //console.log("================cartAdmin==========",cartAdmin);

    const new_requisition_id = get_latest_requisition_id();

    for (let i = 0; i < cartAdmin.length; i++) {
      let newAdminCart = await new Requisition_Detail({
        RID: new_requisition_id,
        product_id: cartAdmin[i].product_id,
        product_name: cartAdmin[i].product_name,
        product_detail: cartAdmin[i].product_detail,
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
