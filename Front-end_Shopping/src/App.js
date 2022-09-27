import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LaPasiva from "./Components/LaPasiva/LaPasiva";
import Starbucks from "./Components/Starbucks/Starbucks";
import Shopping from "./Components/Shopping/Shopping";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shopping />} />
          <Route path="/lapasiva" element={<LaPasiva />} />
          <Route path="/Starbucks" element={<Starbucks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
