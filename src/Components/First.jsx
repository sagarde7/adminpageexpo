import React from "react";
import "../App.css"
import { useNavigate } from "react-router-dom";


const First = () => {
    const navigate = useNavigate();
  return (
    <div className="body">
     
    <div
    onClick={()=>{
      navigate("/login")
    }}
    className="logout flex justify-end  hover:underline hover:cursor-pointer bg-green-400 hover:bg-green-700 text-white">Logout</div>

      

    <div className="bg font-montserrat flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-green-600 mb-8 text-center underline">
          Admin Portal
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <button
            
            onClick={()=>navigate("/imagesuploaded")}
            className="bg-green-400 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center col-span-2 transition duration-300"
          >
            <i className="fas fa-upload mr-3"></i>
            Images Uploaded
          </button>

          <button
            onClick={()=>navigate("/request")}
            
            className="bg-green-400 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center col-span-2 transition duration-300"
          >
            <i className="fas fa-map-marker-alt mr-3"></i>
            Location Status
          </button>

          <button
            onClick={()=>navigate("/pending")}
            
            className="bg-green-400 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center col-span-2 transition duration-300"
          >
            <i className="fas fa-spinner fa-spin mr-3"></i>
            Pending Cleanups
          </button>

          <button
            onClick={()=>navigate("/teams")}
            
            className="bg-green-400 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center col-span-2 transition duration-300"
          >
            <i className="fas fa-users mr-3"></i>
            Team Contacts
          </button>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default First;
