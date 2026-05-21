const Doctor = require("../models/Doctor");

// Get All Doctors
const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add Doctor
const addDoctor = async (req, res) => {
  try {
    const { name, specialization, experience, timings, fee, image } =
      req.body;

    const doctor = new Doctor({
      name,
      specialization,
      experience,
      timings,
      fee,
      image,
    });

    const savedDoctor = await doctor.save();

    res.status(201).json(savedDoctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getDoctors,
  addDoctor,
};