import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Assignment_1 from "./Assignment-01/pages/Assignment_1";
import Assignment_2 from "./Assignment-02/Assignment_2";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ASG-01" element={<Assignment_1 />} />
      <Route path="/ASG-02" element={<Assignment_2 />} />
    </Routes>
  </HashRouter>
);
