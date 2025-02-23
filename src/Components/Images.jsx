import React from "react";
import "../App.css"

const Images = () => {
  const images = [
    {
      src: "download1.jpeg",
      location: "Jal Wayu Towers, Kharar, Punjab",
      time: "11:00 AM",
    },
    {
      src: "download2.webp",
      location: "Sector 52 Nirmal Colony, Chandigarh",
      time: "10:00 AM",
    },
    {
      src: "download3.jpeg",
      location: "Sector 1 Sukhna Lake, Chandigarh",
      time: "9:30 AM",
    },
  ];

  return (
    <div className="body">
    <div className="text-white bg-cover bg-no-repeat bg-fixed min-h-screen" style={{ backgroundImage: "url('imagesw.jpg')" }}>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Images Uploaded</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 px-10">
          {images.map((image, index) => (
            <div key={index} className="bg-green-600 rounded-lg p-6 shadow-lg">
              <img src={image.src} alt="Location" className="mb-4 h-80 w-96 object-cover" />
              <h2 className="text-2xl font-bold mb-4">{image.location}</h2>
              <h5 className="font-bold mb-4">Time: {image.time}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Images;
