import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"

const Pending = () => {
  const navigate = useNavigate();

  return (
    <div className="body">
    <div className=" text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Pending Locations</h1>

      {/* Navigation Buttons */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => navigate("/first")}
          className="btn hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
        >
          <i className="fa fa-home"></i> Home
        </button>
        <button
          onClick={() => navigate("/request")}
          className="btn bgp hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
        >
          Location Status
        </button>
        <button
          onClick={() => navigate("/progress")}
          className="btn bgpr hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
        >
          In Progress
        </button>
        <button
          onClick={() => navigate("/completed")}
          className="btn bgc hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
        >
          Completed
        </button>
      </div>

      {/* Pending Locations */}
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-green-600 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">JalWayu Towers, Kharar</h2>
            <div className="status bgp text-white px-3 py-1 rounded-lg">
              Pending
            </div>
          </div>

          <div className="bg-green-600 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Ellina Floors, Sector 116, Mohali
            </h2>
            <h2 className="text-2xl font-bold mb-4">
              City Square, Sector 117, Chandigarh
            </h2>
            <div className="status bgp text-white px-3 py-1 rounded-lg">
              Pending
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Pending;
