import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import StallDetail from "./components/StallDetail";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/stalls/:id" element={<StallDetail />} />
    </Routes>
  </Router>
);

export default App;
