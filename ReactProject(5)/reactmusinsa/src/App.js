import "./App.css";
import Navbar from "./components/Navbar";
import ProductAll from "./components/ProductAll";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
      </Routes>
    </div>
  );
}

export default App;
