import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Despre from "./pages/Despre";
import HeartMapping from "./pages/HeartMapping";
import FAQ from "./pages/FAQ";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/despre" element={<Despre />} />
        <Route path="/heartmapping" element={<HeartMapping />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}
