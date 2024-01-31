import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import SummaryPage from "./Components/SummaryPage/SummaryPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/summary"} element={<SummaryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
