 import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LostPets from "./pages/LostPets";
import FoundPets from "./pages/FoundPets";
import AddPet from "./pages/AddPet";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lost-pets" element={<LostPets />} />

          <Route path="/found-pets" element={<FoundPets />} />
          <Route path="/add-pet" element={<AddPet />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
