// import node modules
const mongoose = require("mongoose");

// db connect
mongoose
  .connect("mongodb://localhost/sortablelist", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log("Somethig was wrong"));
