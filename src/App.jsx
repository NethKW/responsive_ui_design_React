import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <h1>Responsive UI Assignments</h1>
      <div className="links">
        <Link to="/ASG-01" className="alink">Assignment 1</Link>
        <Link to="/ASG-02" className="alink">Assignment 2</Link>
      </div>
    </div>
  );
}
