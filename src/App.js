import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import ArtPage from "./pages/artpage/artpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/:title" element={<ArtPage />} />
      </Routes>
    </div>
  );
}

export default App;
