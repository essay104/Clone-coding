import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import Reset from "./Reset";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import MyView from "./Pages/MyView";
import Hobby from "./Pages/Hobby";

function App() {
  return (
    <>
      <Reset />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mySelf" element={<MyView />} />
        <Route path="/hobby" element={<Hobby />} />
        {/* <Route path="/" element={}/> */}
      </Routes>
    </>
  );
}

export default App;
