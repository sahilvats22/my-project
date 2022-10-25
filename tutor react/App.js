import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Home from "./pages/home";
import About from "./pages/about";
import Tutors from "./pages/tutor";
import Students from "./pages/student";

function App() {
  return (
    <div>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tutors" element={<Tutors />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </div>
  );
}

export default App;
