const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const updateSchema = new Schema({
  title: String,
  snippet: { type: String, required: false },
  url: { type: String, required: false },
  image: { type: String, required: false },
  bodyText: { type: String, required: false },
  sticky: { type: Boolean, required: false },
  date: { type: Date, default: Date.now },
});

const Update = mongoose.model("Update", updateSchema);

module.exports = Update;
