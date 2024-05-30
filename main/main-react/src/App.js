import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Production from "./pages/Production";
import Reset from "./Reset";
import Header from "./component/Header";
import { darkTheme, lightTheme } from "./theme";
import { ThemeProvider } from "styled-components";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const currentTheme = theme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <Reset />
      <BrowserRouter>
        <Header toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/production/" element={<Production />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
