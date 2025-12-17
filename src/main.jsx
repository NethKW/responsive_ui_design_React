import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Assignment_1 from "./Assignment-01/pages/Assignment_1";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ASG-01" element={<Assignment_1 />} />
    </Routes>
  </HashRouter>
);
