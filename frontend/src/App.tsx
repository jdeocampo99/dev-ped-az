import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DoctorsPage from "./pages/DoctorsPage";
import AppointmentPage from "./pages/AppointmentPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/appointment" element={<AppointmentPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
