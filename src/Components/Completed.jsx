import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

const completedLocations = [
  { name: "Sector 1 Sukhna Lake, Chandigarh" },
];

const Completed = () => {
  return (
    <div className="body">
    <div className=" text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Completed Locations</h1>

      {/* Navigation Buttons */}
      <div className="flex justify-center mb-6">
        <Link to="/home" className="btn hover:bg-orange-600 text-black font-bold py-2 px-4 rounded-lg mr-4">
          <i className="fa fa-home"></i> Home
        </Link>
        <Link to="/pending" className="btn bgp hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg mr-4">
          Pending
        </Link>
        <Link to="/progress" className="btn bgpr hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg mr-4">
          In Progress
        </Link>
        <Link to="/request" className="btn bgc hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg mr-4">
          Location Status
        </Link>
      </div>

      {/* Completed Locations Grid */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {completedLocations.map((location, index) => (
            <div key={index} className="bg-green-600 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">{location.name}</h2>
              <div className="status completed bg-green-700 text-white px-4 py-2 rounded-full">
                Completed
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Completed;
