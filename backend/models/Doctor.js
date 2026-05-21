const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  experience: String,
  timings: String,
  fee: Number,
  image: String,
});

module.exports = mongoose.model("Doctor", doctorSchema);