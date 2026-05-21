import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Appointments from "./pages/Appointments";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
        path="/appointments"
        element={
        <ProtectedRoute>
        <Appointments />
        </ProtectedRoute>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;