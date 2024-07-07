const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public/assets")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
