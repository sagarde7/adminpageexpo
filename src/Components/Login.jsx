import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password!");
      return;
    }
    // Simulate authentication (Replace with actual API call)
    if (email === "admin@example.com" && password === "password123") {
      alert("Login Successful!");
      navigate("/first"); // Redirect to First page
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleForgotPassword = () => {
    alert("Forgot Password Clicked");
  };

  const handleSignUp = () => {
    navigate("/register"); // Redirect to First page

    // alert("Sign Up Clicked");
  };

  return (
    <div className="flex justify-center items-center h-screen font-montserrat bg-cover bg-no-repeat bg-fixed" style={{ backgroundImage: "url('imageback.png')" }}>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-600 text-center underline mb-8">Admin Portal</h2>
        
        <input
          type="email"
          placeholder="Email"
          className="bg-gray-100 border-gray-300 text-gray-700 rounded-lg py-3 px-4 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-100 border-gray-300 text-gray-700 rounded-lg py-3 px-4 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg w-full mb-4 transition duration-300"
          onClick={handleLogin}
        >
          Login
        </button>
        
        <div className="flex justify-between items-center">
          <button className="text-green-600 hover:text-green-700 text-sm font-medium hover:underline" onClick={handleForgotPassword}>
            Forgot Password?
          </button>
          <div className="text-gray-500 text-sm">
            Don't have an account?{" "}
            <button className="text-green-600 hover:text-green-700 font-medium hover:underline" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
