import React from "react";
import { Link } from "react-router-dom";
import netflix from "../netflix.png";

const Navigation = () => {
  return (
    <div className="totalbar">
      <div className="logo">
        <img width={100} src={netflix} />
        <ul className="nav">
          <li className="nav-item">Movie</li>
          <li className="nav-item">TV show</li>
          <li className="nav-item">Animation</li>
          <li className="nav-item">Drama</li>
        </ul>
      </div>
      <form>
        <input id="search-bar" type="search" placeholder="Search" />
        <label for="serach-bar">Search</label>
      </form>
    </div>
  );
};

export default Navigation;
