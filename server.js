const express = require("express");
const app = express();
const db = require("./src/models");
const reader = require("./src/controllers/read")
const initRoutes = require("./src/routes/web");

global.__basedir = __dirname;
app.use(express.static(__dirname));

app.use(express.urlencoded({ extended: true }));
// app.use('/',initRoutes);
initRoutes(app);
// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});
//app.get('/images',reader.getImages);
let port = 3000;
app.listen(port, () => {
  console.log(`Running at localhost:HTTPS://${port}`);
});
