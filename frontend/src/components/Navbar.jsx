import { Link } from "react-router-dom";
import { FaHospital } from "react-icons/fa";

function Navbar() {
    const logout = () => {
  localStorage.removeItem("token");

  localStorage.removeItem("user");

  window.location.href = "/login";
};
  return (
    <nav className="backdrop-blur-md bg-white/80 shadow-md px-10 py-5 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <FaHospital className="text-cyan-600 text-4xl" />

        <h1 className="text-3xl font-extrabold text-blue-900">
          MediCare
        </h1>
      </div>

      <div className="flex gap-8 items-center">
        <Link
          to="/"
          className="font-semibold hover:text-cyan-600 transition"
        >
          Home
        </Link>

        <Link
          to="/appointments"
          className="font-semibold hover:text-cyan-600 transition"
        >
          My Appointments
        </Link>

        <Link
          to="/login"
          className="font-semibold hover:text-cyan-600 transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
        >
          Register
        </Link>

        <button
        onClick={logout}
        className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition"
        >
        Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;