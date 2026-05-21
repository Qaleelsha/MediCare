import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import DoctorCard from "../components/DoctorCard";

function Home() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/doctors"
      );

      setDoctors(res.data);
    } catch (error) {
      console.log(error);
    }
  };

const bookAppointment = async (doctorId) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    await axios.post(
      "http://localhost:8000/api/appointments",
      {
        doctor: doctorId,
        appointmentDate: new Date(),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Appointment booked successfully");
  } catch (error) {
    console.log(error);

    alert("Booking failed");
  }
};

  return (
    <div className="bg-[#f4f8fb] min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <div className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-[#0f172a] via-blue-900 to-cyan-700 text-white py-32 px-6 md:px-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
            
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="uppercase tracking-[5px] text-cyan-300 font-semibold">
                Smart Healthcare Platform
              </p>

              <h1 className="text-6xl font-extrabold leading-tight mt-6">
                Book Appointments
                <span className="text-cyan-300"> With Trusted Doctors</span>
              </h1>

              <p className="mt-8 text-lg text-gray-200 leading-8">
                Experience seamless hospital appointment booking,
                expert consultation, and personalized healthcare
                management all in one platform.
              </p>

              <div className="flex gap-6 mt-10">
                <button className="bg-cyan-400 hover:bg-cyan-300 text-black px-8 py-4 rounded-full font-bold shadow-2xl transition duration-300">
                  Book Appointment
                </button>

                <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300">
                  Explore Doctors
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="hidden md:flex justify-center"
            >
              <img
                src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg"
                alt="doctor"
                className="w-[500px] drop-shadow-2xl rounded-3xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 -mt-16 px-6 relative z-10">
        {[
          ["50+", "Expert Doctors"],
          ["10k+", "Happy Patients"],
          ["24/7", "Emergency Support"],
          ["100%", "Secure Booking"],
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl shadow-xl p-8 text-center"
          >
            <h2 className="text-4xl font-extrabold text-blue-700">
              {item[0]}
            </h2>

            <p className="mt-3 text-gray-600 font-medium">
              {item[1]}
            </p>
          </motion.div>
        ))}
      </div>

      {/* DOCTORS SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <p className="text-cyan-600 font-semibold uppercase tracking-[4px]">
            Our Medical Specialists
          </p>

          <h2 className="text-5xl font-extrabold mt-4 text-gray-800">
            Meet Our Expert Doctors
          </h2>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
            Highly qualified specialists with years of experience
            delivering world-class healthcare services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {doctors.map((doctor) => (
            <DoctorCard
            key={doctor._id}
            doctor={doctor}
            onBook={bookAppointment}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;