import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from "./authPages/LoginPage/LoginPage";
import RegisterPage from "./authPages/RegisterPage/RegisterPage";
import Dashboard from "./DashBoard/Dashboard";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/*" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
