import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate=useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", form);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-700">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-bold text-center mb-4 text-green-700">Register</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded"
          />
          <button type="submit" onClick={()=>{
            navigate("/login");
          }} className="w-full bg-green-600 text-white py-2 rounded">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
