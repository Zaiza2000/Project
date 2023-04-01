const {
  createUser,
  getUser,
  deleteUser,
  listUser,
  editUser,
  login,
  currentUser,
  changeRole,
} = require("../controllers/auth.js");

const {
  listCategory,
  getCategory,
  createCategory,
  editCategory,
  deleteCategory,
} = require("../controllers/category.js");

const {
  listProduct,
  getProduct,
  editProduct,
  createProduct,
  deleteProduct,
  searchFilters,
} = require("../controllers/product.js");

const {
  listProvince,
  listDistrict,
  listSubDistrict,
} = require("../controllers/location.js");

const {
  listOrder,
  getOrderbyUser,
  getOrder,
  CreateOrder,
  changeStatus,
} = require("../controllers/order.js");

const { CartUpdateToProduct, userCart,
  adminCart } = require("../controllers/cart.js");

const { listRequisition, getRequisition, listRequisitionByRID } = require("../controllers/requisition_detail");
const { listOrderDetail, getOrderDetail, listOrderDetailByOID, listOrderDetailByUser, Order_detail_join_Orders, get_order_detail_by_oid } = require("../controllers/order_detail");

const express = require("express");
const router = express.Router();

//@Enpoint    http://localhost:8000/api


//*************Middleware*************//
const { auth, adminCheck } = require("../middleware/auth.js");
const { upload } = require("../middleware/uploadfile.js");

//*************Current-User***********//
router.post("/current-user", auth, currentUser);

//*************Current-Admin**********//
router.post("/current-admin", auth, adminCheck, currentUser);

//**************Admin Cart************//
router.post("/admin/cart", auth, adminCart);

//**************** User Cart *************//
router.post("/user/cart", auth, userCart);
router.put("/user/CartUpdateToProduct", auth, CartUpdateToProduct);



//*************** API User **************//
router.get("/listUser", listUser);
router.get("/getUser/:id", getUser);
router.post("/login", login);
router.post("/createUser", createUser);
router.put("/editUser/:id", editUser);
router.delete("/deleteUser/:id", deleteUser);
router.post("/changeRole", changeRole);



//***************** API Category *************//
router.get("/listCategory", listCategory);
router.get("/getCategory/:id", getCategory);
// router.get("/getCategory/:category_name", getSearchCategory);
router.post("/createCategory", createCategory);
router.put("/editCategory/:id", editCategory);
router.delete("/deleteCategory/:id", deleteCategory);



//****************** API Product **************//
router.get("/listProduct", listProduct);
router.get("/getProduct/:id", getProduct);
router.post("/createProduct", createProduct);
router.put("/editProduct/:id", editProduct);
router.delete("/deleteProduct/:id", deleteProduct);




//***************** API Search ****************//
// http://localhost:8000/api/search/filters
router.post("/search/filters", searchFilters);




//API Location => location.js//
router.get("/province", listProvince);
router.get("/province/:id/district", listDistrict);
router.get("/district/:id", listSubDistrict);


//API Order => order.js//
router.post("/createOrder", auth, upload, CreateOrder);
router.get("/listOrder", listOrder);
router.put("/changeStatus", changeStatus);




//API Requisition => requisition_detail.js//
router.get("/listRequisition", listRequisition);
router.get("/listRequisitionByRID", listRequisitionByRID);
router.get("/getRequisition/:id", getRequisition);



//API order_detail => order_detail.js//
router.get("/listOrderDetail", listOrderDetail);
router.get("/listOrderDetailByOID", listOrderDetailByOID);
router.get("/getOrderDetail/:id", getOrderDetail);
router.get("/listOrderDetailByUser/:id", listOrderDetailByUser);
router.get("/Order_detail_join_Orders/:id", Order_detail_join_Orders);
router.get("/get_order_detail_by_oid/:id&:OID", get_order_detail_by_oid);


module.exports = router;
