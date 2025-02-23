import React from "react";
import "../App.css"

const teamContacts = [
  { region: "Mohali", name: "Raj Kishore", contact: "+91 7903157169" },
  { region: "Kharar", name: "Ravi Singh", contact: "+91 7705157189" },
  { region: "Panipat", name: "Suraj Lal", contact: "+91 7705154548" },
  { region: "Chandigarh", name: "Gurpreet Singh", contact: "+91 9705157189" },
];

const Teams = () => {
  return (
    <div className="body">
    <div className="text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Teams Contact</h1>

      {/* Team Contacts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {teamContacts.map((team, index) => (
          <div key={index} className="bg-green-600 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Region: {team.region}</h2>
            <h2 className="text-2xl font-bold mb-4">Name: {team.name}</h2>
            <h2 className="text-2xl font-bold mb-4">Contact: {team.contact}</h2>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Teams;
