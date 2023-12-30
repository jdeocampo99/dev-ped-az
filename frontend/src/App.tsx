import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DoctorsPage from "./pages/DoctorsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          {/* <Route path="/services" element={<ServicesPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/resources" element={<ResourcesPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
