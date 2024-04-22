import "./App.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import MainContents from "./MainContents";

function App() {
  return (
    <div className="App">
      <Profile />
      <MainContents />
    </div>
  );
}

export default App;
