import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import Reset from "./Reset";
import Header from "./Component/Header";

function App() {
  return (
    <>
      <Reset />
      <Header />
      <BrowserRouter></BrowserRouter>
    </>
  );
}

export default App;
