const Appointment = require("../models/Appointment");

// Book Appointment
const bookAppointment = async (req, res) => {
  try {
    const { doctor, appointmentDate } = req.body;

    const appointment = new Appointment({
      user: req.user.id,
      doctor,
      appointmentDate,
    });

    const savedAppointment = await appointment.save();

    res.status(201).json(savedAppointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get User Appointments
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({
      user: req.user.id,
    }).populate("doctor");

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  bookAppointment,
  getAppointments,
};