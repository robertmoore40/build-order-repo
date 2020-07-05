const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buildSchema = new Schema({
  Version: { type: String, required: true },
  Race: { type: String, required: true },
  Order: String,
  
  date: { type: Date, default: Date.now }
});

const Build = mongoose.model("Book", buildSchema);

module.exports = Book;