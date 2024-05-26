
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
