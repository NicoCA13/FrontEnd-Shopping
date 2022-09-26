import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LaPasiva from "./Components/LaPasiva/LaPasiva";
import Shopping from "./Components/Shopping/Shopping";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shopping />} />
          <Route path="/lapasiva" element={<LaPasiva />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
