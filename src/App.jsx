import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import './app.css'
import './responsive.css'
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/profile/*" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
