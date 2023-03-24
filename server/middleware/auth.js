const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.auth = (req, res, next) => {
  try {
    const token = req.headers["authtoken"];

    if (!token) {
      return res.status(401).send("no token , authentication denied");
    }
    const decoded = jwt.verify(token, "jwtSecret");

    // console.log("middleware", decoded);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send("Token invalid!!");
  }
};
exports.adminCheck = async (req, res, next) => {
  try {
    const { username } = req.user;
    const adminUser = await User.findOne({ username });
    if (adminUser.role !== "admin") {
      res.status(403).send(error, "Admin Access denied");
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send("Token invalid!!");
  }
};
