const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/src/uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      "file-" +
        Date.now() +
        "." +
        file.originalname.split(".")[file.originalname.split(".").length - 1]
    );
  },
});

// exports.upload = multer({ storage: multer.memoryStorage() }).single("file");
exports.upload = multer({ storage: storage }).single("file");
