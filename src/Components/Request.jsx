import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"

const Request = () => {
  const navigate = useNavigate();

  return (
    <div className="body">
    <div className="text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Locations Status</h1>

      {/* Navigation Buttons */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => navigate("/first")}
          className="btn bounce-hover hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
        >
          <i className="fa fa-home"></i> Home
        </button>
        <button
          onClick={() => navigate("/pending")}
          className="btn bgp bounce-hover hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
        >
          Pending
        </button>
        <button
          onClick={() => navigate("/progress")}
          className="btn bgpr bounce-hover hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
        >
          In Progress
        </button>
        <button
          onClick={() => navigate("/completed")}
          className="btn bgc bounce-hover hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
        >
          Completed
        </button>
      </div>

      {/* Location Status Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-green-600 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Jal Wayu Towers, Kharar, Punjab</h2>
          <div className="status bgp text-white px-3 py-1 rounded-lg">Pending</div>
        </div>

        <div className="bg-green-600 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Sector 52 Nirmal Colony, Chandigarh</h2>
          <div className="status bgpr text-black px-3 py-1 rounded-lg">In Progress</div>
        </div>

        <div className="bg-green-600 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Sector 1 Sukhna Lake, Chandigarh</h2>
          <div className="status bgc text-black px-3 py-1 rounded-lg">Completed</div>
        </div>

        <div className="bg-green-600 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Sector 44 Shahibaug, Chandigarh</h2>
          <div className="status bgp text-white px-3 py-1 rounded-lg">Pending</div>
        </div>

        <div className="bg-green-600 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Sector 34 Terresa Enclave, Mohali</h2>
          <div className="status bgpr text-black px-3 py-1 rounded-lg">In Progress</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Request;
