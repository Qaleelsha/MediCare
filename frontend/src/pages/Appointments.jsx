import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";

function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:8000/api/appointments",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAppointments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#f4f8fb] min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <p className="text-cyan-600 font-semibold uppercase tracking-[4px]">
            Patient Dashboard
          </p>

          <h1 className="text-5xl font-extrabold mt-4 text-gray-800">
            My Appointments
          </h1>

          <p className="text-gray-500 mt-6 text-lg">
            Track all your booked consultations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {appointments.map((appointment) => (
            <div
              key={appointment._id}
              className="bg-white rounded-[30px] shadow-xl overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <img
                  src={appointment.doctor.image}
                  alt={appointment.doctor.name}
                  className="w-full md:w-[250px] h-[250px] object-cover"
                />

                <div className="p-8 flex-1">
                  <h2 className="text-3xl font-bold text-gray-800">
                    {appointment.doctor.name}
                  </h2>

                  <p className="text-cyan-600 font-semibold mt-3 text-lg">
                    {appointment.doctor.specialization}
                  </p>

                  <div className="mt-6 space-y-3 text-gray-600">
                    <p>
                      <span className="font-bold">
                        Experience:
                      </span>{" "}
                      {appointment.doctor.experience}
                    </p>

                    <p>
                      <span className="font-bold">
                        Available:
                      </span>{" "}
                      {appointment.doctor.timings}
                    </p>

                    <p>
                      <span className="font-bold">
                        Consultation Fee:
                      </span>{" "}
                      ₹{appointment.doctor.fee}
                    </p>

                    <p>
                      <span className="font-bold">
                        Appointment Date:
                      </span>{" "}
                      {new Date(
                        appointment.appointmentDate
                      ).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="mt-8">
                    <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
                      Appointment Confirmed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {appointments.length === 0 && (
          <div className="text-center mt-20">
            <h2 className="text-3xl font-bold text-gray-700">
              No Appointments Yet
            </h2>

            <p className="text-gray-500 mt-4">
              Book your first consultation
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Appointments;