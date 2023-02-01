const {
  createUser,
  getUser,
  deleteUser,
  listUser,
  editUser,
  login,
  listCategory,
  getCategory,
  createCategory,
  editCategory,
  deleteCategory,
  listProduct,
  getProduct,
  editProduct,
  createProduct,
  deleteProduct,
  currentUser,
  changeRole,
  searchFilters,
} = require("../controllers/auth.js");

const { listProvince,listAmphure,listDistrict } = require("../controllers/location.js")
const express = require("express");

const router = express.Router();

//@Enpoint    http://localhost:8000/api

//Middleware
const { auth, adminCheck } = require("../middleware/auth.js");

//Current-User
router.post("/current-user", auth, currentUser);

//Current-Admin
router.post("/current-admin", auth, adminCheck, currentUser);

//API User//
router.get("/listUser", listUser);
router.get("/getUser/:id", getUser);
router.post("/login", login);
router.post("/createUser", createUser);
router.put("/editUser/:id", editUser);
router.delete("/deleteUser/:id", deleteUser);
//Change User//
router.post("/changeRole", changeRole);

//API Category//
router.get("/listCategory", listCategory);
router.get("/getCategory/:id", getCategory);
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
router.post("/search/filters" , searchFilters);

//API Location//
router.get("/province", listProvince);
router.get("/province/:id/amphure", listAmphure);
router.get("/amphure/:id", listDistrict);



module.exports = router;
