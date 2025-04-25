// src/App.jsx
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navigation from "../components/Navigation"


import Home from "../pages/Home";
import Midia from '../pages/Midia';
import VideosPage from '../pages/Videos';
import EnviarVideo from '../pages/EnviarVIdeo';
import AprovarVideos from '../pages/Admin/AprovarVideos';
import VideoPlayer from '../pages/Videos/VideoPlayer'


import Footer from "../components/Footer"


const App = () => {
  return (
    <Router>
        <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/midia" element={<Midia />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/enviar-video" element={<EnviarVideo />} />
        <Route path="/admin/aprovar-videos" element={<AprovarVideos />} />
        <Route path="/video/:id" element={<VideoPlayer />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
