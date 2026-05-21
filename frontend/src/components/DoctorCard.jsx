import { motion } from "framer-motion";

function DoctorCard({ doctor, onBook }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-[30px] overflow-hidden shadow-xl hover:shadow-2xl transition duration-500"
    >
      <div className="relative">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-[350px] object-cover"
        />

        <div className="absolute top-5 right-5 bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
          Available
        </div>
      </div>

      <div className="p-8">
        <h2 className="text-3xl font-extrabold text-gray-800">
          {doctor.name}
        </h2>

        <p className="text-cyan-600 font-bold mt-3 text-lg">
          {doctor.specialization}
        </p>

        <div className="mt-6 space-y-3 text-gray-600">
          <p>
            <span className="font-bold">Experience:</span>{" "}
            {doctor.experience}
          </p>

          <p>
            <span className="font-bold">Available:</span>{" "}
            {doctor.timings}
          </p>

          <p>
            <span className="font-bold">Consultation Fee:</span>{" "}
            ₹{doctor.fee}
          </p>
        </div>

        <button
            onClick={() => onBook(doctor._id)}
            className="w-full mt-8 bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-4 rounded-2xl font-bold hover:scale-105 transition duration-300 shadow-lg"
            >
            Book Appointment
        </button>
      </div>
    </motion.div>
  );
}

export default DoctorCard;