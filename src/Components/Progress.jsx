import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

const progressLocations = [
  { name: "Sector 52 Nirmal Colony, Chandigarh" },
  { name: "Sector 34 Terresa Enclave, Mohali" },
];

const Progress = () => {
  return (
    <div className="body">
    <div className=" text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">In-Progress Locations</h1>

      {/* Navigation Buttons */}
      <div className=" flex justify-center mb-6">
        <Link to="/first" className="btn hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg mr-4">
          <i className="fa fa-home"></i> Home
        </Link>
        <Link to="/pending" className="btn bgp hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg mr-4">
          Pending
        </Link>
        <Link to="/request" className="btn bgpr hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg mr-4">
          Location Status
        </Link>
        <Link to="/completed" className="btn bgc hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg mr-4">
          Completed
        </Link>
      </div>

      {/* In-Progress Locations Grid */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {progressLocations.map((location, index) => (
            <div key={index} className="bg-green-600 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">{location.name}</h2>
              <div className="status in-progress bg-yellow-500 text-black px-4 py-2 rounded-full">
                In Progress
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Progress;
