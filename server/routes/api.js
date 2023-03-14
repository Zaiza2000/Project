const {
  createUser,
  getUser,
  deleteUser,
  listUser,
  editUser,
  login,
  currentUser,
  changeRole,

  // getSearchCategory,
  userCart,
  adminCart,
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
} = require("../controllers/order.js");

const { listRequisition ,getRequisition } = require("../controllers/requisition_detail");

const express = require("express");
const router = express.Router();

//@Enpoint    http://localhost:8000/api

//*************Middleware*************//
const { auth, adminCheck } = require("../middleware/auth.js");

//*************Current-User***********//
router.post("/current-user", auth, currentUser);

//*************Current-Admin**********//
router.post("/current-admin", auth, adminCheck, currentUser);

//**************Admin Cart************//
router.post("/admin/cart", auth, adminCart);

//*************** API User **************//
router.get("/listUser", listUser);
router.get("/getUser/:id", getUser);
router.post("/login", login);
router.post("/createUser", createUser);
router.put("/editUser/:id", editUser);
router.delete("/deleteUser/:id", deleteUser);
//**************** Change User ************//
router.post("/changeRole", changeRole);
//**************** User Cart *************//
router.post("/user/cart", auth, userCart);

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
router.post("/createOrder", CreateOrder);
router.get("/listOrder", listOrder);

//API Requisition => requisition_detail.js//
router.get("/listRequisition", listRequisition);
router.get("/getRequisition/:id", getRequisition);

module.exports = router;
