const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const User = require("./models/clone");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/clone");
}

app.get("/", (req, res) => {
  res.send("page is woking");
});
app.get("/clone", async (req, res) => {
  let users = await User.find();
  res.render("index.ejs", { users });
});
app.get("/clone/:id/edit", async (req, res) => {
  let { id } = req.params;
  let user = await User.findById(id);
  res.render("edit", { user });
});
app.put("/clone/:id", async (req, res) => {
  let { id } = req.params;
  let { msg } = req.body;
  await User.findByIdAndUpdate(id, { msg }, { runValidators: true });
  res.redirect("/clone");
});
app.delete("/clone/:id", async (req, res) => {
  let { id } = req.params;
  await User.findByIdAndDelete(id);
  res.redirect("/clone");
});

app.listen(8080, () => {
  console.log("port is listing to 8080");
});
