import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [tasks, setTasks] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const token = localStorage.getItem("token");

  // Fetch Tasks
  const fetchTasks = async () => {

    try {

      const res = await axios.get(
        "http://127.0.0.1:8000/api/tasks",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTasks(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  // Load tasks on page load
  useEffect(() => {
    fetchTasks();
  }, []);

  // Handle form input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Create Task
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await axios.post(
        "http://127.0.0.1:8000/api/tasks",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setFormData({
        title: "",
        description: "",
      });

      fetchTasks();

    } catch (error) {
      console.log(error);
    }
  };

  // Delete Task
  const deleteTask = async (id) => {

    try {

      await axios.delete(
        `http://127.0.0.1:8000/api/tasks/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchTasks();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

      {/* Task Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg mb-8"
      >

        <h2 className="text-2xl font-bold mb-4">
          Create Task
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <textarea
          name="description"
          placeholder="Task Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Add Task
        </button>

      </form>

      {/* Task List */}
      <div className="grid md:grid-cols-2 gap-6">

        {tasks.map((task) => (

          <div
            key={task._id}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >

            <h2 className="text-2xl font-bold mb-2">
              {task.title}
            </h2>

            <p className="text-gray-600 mb-4">
              {task.description}
            </p>

            <button
              onClick={() => deleteTask(task._id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Dashboard;