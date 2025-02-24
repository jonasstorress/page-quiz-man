import "./assets/css/main.css";

import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import App from "./views/Index.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
);
