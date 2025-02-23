import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import First from "./Components/First";
import Images from "./Components/Images";
import Pending from "./Components/Pending";
import Request from "./Components/Request";
import Teams from "./Components/Teams";
import Completed from "./Components/Completed";
import Progress from "./Components/Progress";
import Register from "./Components/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/first" element={<First />} />
        <Route path="/login" element={<Login />} />
        <Route path="/imagesuploaded" element={<Images />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/request" element={<Request />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
};

export default App;
