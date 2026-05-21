import { useState } from "react";
import API from "../services/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:8000/api/auth/login",
      formData
    );

    // Save token
    localStorage.setItem("token", res.data.token);

    // Save user
    localStorage.setItem(
      "user",
      JSON.stringify(res.data.user)
    );

    alert("Login successful");

    // Redirect home
    navigate("/");
  } catch (error) {
    console.log(error);

    alert(
      error.response?.data?.message || "Login failed"
    );
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-96"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 mb-6 border rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg"
        >
          Login
        </button>
        <p className="mt-4 text-center">
  Don't have an account?{" "}
  <Link to="/register" className="text-blue-500">
    Register
  </Link>
</p>
      </form>
    </div>
  );
}
