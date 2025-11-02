import React from "react";
import { Routes, Route } from "react-router-dom";
import BirthdayCard from "./vnska.jsx";
import AboutPage from "./about.jsx"; // example future page

export default function App() {
  return (
    <Routes>
      <Route path="/vnska" element={<BirthdayCard />} />
      <Route path="/" element={<AboutPage />} />
    </Routes>
  );
}
