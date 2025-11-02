import React from "react";
import { Routes, Route } from "react-router-dom";
import BirthdayCard from "./BirthdayCard.jsx";
import AboutPage from "./AboutPage.jsx"; // example future page

export default function App() {
  return (
    <Routes>
      <Route path="/vnska" element={<BirthdayCard />} />
      <Route path="/" element={<AboutPage />} />
    </Routes>
  );
}
