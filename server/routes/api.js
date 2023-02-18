const {
  createUser,
  getUser,
  deleteUser,
  listUser,
  editUser,
  login,
  currentUser,
  changeRole,
  searchFilters,
  getSearchCategory,
  userCart,
  adminCart
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
} = require("../controllers/product.js");

const {
  listProvince,
  listDistrict,
  listSubDistrict,
} = require("../controllers/location.js");
const express = require("express");

const {
  listOrder,
  getOrderbyUser,
  getOrder,
  CreateOrder,
} = require("../controllers/order.js");

const router = express.Router();

//@Enpoint    http://localhost:8000/api

//Middleware
const { auth, adminCheck } = require("../middleware/auth.js");

//Current-User
router.post("/current-user", auth, currentUser);

//Current-Admin
router.post("/current-admin", auth, adminCheck, currentUser);
router.post("/admin/cart", auth, adminCart);
//API User//
router.get("/listUser", listUser);
router.get("/getUser/:id", getUser);
router.post("/login", login);
router.post("/createUser", createUser);
router.put("/editUser/:id", editUser);
router.delete("/deleteUser/:id", deleteUser);
//Change User//
router.post("/changeRole", changeRole);
//User Cart//
router.post("/user/cart", auth, userCart);


//API Category//
router.get("/listCategory", listCategory);
router.get("/getCategory/:id", getCategory);
router.get("/getCategory/:category_name", getSearchCategory);
router.post("/createCategory", createCategory);
router.put("/editCategory/:id", editCategory);
router.delete("/deleteCategory/:id", deleteCategory);

//API Product//
router.get("/listProduct", listProduct);
router.get("/getProduct/:id", getProduct);
router.post("/createProduct", createProduct);
router.put("/editProduct/:id", editProduct);
router.delete("/deleteProduct/:id", deleteProduct);

//API Search//
router.post("/search/filters", searchFilters);

//API Location => location.js//
router.get("/province", listProvince);
router.get("/province/:id/district", listDistrict);
router.get("/district/:id", listSubDistrict);

//API Order => order.js//
router.post("/create-order", CreateOrder);

module.exports = router;
