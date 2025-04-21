// src/App.jsx
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navigation from "../components/Navigation"


import Home from "../pages/Home";
import Midia from '../pages/Midia';
import Video from '../pages/Videos';



import Footer from "../components/Footer"


const App = () => {
  return (
    <Router>
        <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/midia" element={<Midia />} />
        <Route path="/videos" element={<Video />} />
       
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
