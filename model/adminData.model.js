const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  price: Number,
  details: String,
  image: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

const adminData = mongoose.model("adminData", adminSchema);
module.exports = adminData;
