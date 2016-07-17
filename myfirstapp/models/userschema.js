var mongoose = require("mongoose");

var userschema = mongoose.Schema({
  name: String,
  age: String,
  location: { city: String, country: String }
});

module.exports = mongoose.model("users", userschema);
