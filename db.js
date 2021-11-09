const mongoose = require("mongoose");

module.exports = () => {
  function connect() {
    mongoose.connect("mongodb://localhost/test", (err) => {
      if (err) {
        console.error("mongodb connection error: ", err);
      }
      console.log("mongodb connected! test collection");
    });
  }
  connect();
  mongoose.connection.on("disconnected", connect);
  //   require("./user.js");
};

// mongoose.connect("mongodb://localhost/test");
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error"));
// db.once("open", () => {
//   console.log("DB connected");
// });

// const CatSchema = mongoose.Schema({
//   name: String,
//   age: Number,
// });
// const Cat = mongoose.model("Cats", CatSchema);

// const gorongyi = new Cat({ name: "gorongyi", age: 7 });
// gorongyi.save();
// const jed = new Cat({ name: "jed", age: 3 });
// jed.save();
