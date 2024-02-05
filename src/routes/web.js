const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload");
const upload = require("../middleware/upload");
const reader = require("../controllers/read")

let routes = (app) => {
  
  router.get("/images",reader.getImages);
  
  router.get("/", homeController.getHome);

  router.post("/upload", upload.single("file"), uploadController.uploadFiles);
  
  return app.use("/", router);
};

module.exports = routes;
