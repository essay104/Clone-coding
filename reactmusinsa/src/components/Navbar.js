import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const menuList = [
  "인기",
  "상의",
  "아우터",
  "바지",
  "원피스",
  "스커트",
  "스니커즈",
  "신발",
];

const Navbar = () => {
  return (
    <div className="header-container">
      <div className="nav-header">
        <div className="toggle-menu">
          <FontAwesomeIcon icon={faBars} />
          <span>로그인</span>
        </div>
      </div>
      <div className="nav-log">
        <Link to="/">
          <img
            width={150}
            src="https://cf.creatrip.com/original/blog/14284/sznmaigzb1b1330bcwt9s7wmw1cs5sa9.jpeg?d=500&q=80&f=webp"
            alt="logo"
          ></img>
        </Link>
      </div>
      <div className="nav-menu-area">
        <ul className="menu">
          {menuList.map((menu, idx) => (
            <li key={idx}>
              <Link to="">{menu}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="search-box">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="상품검색"/>
      </div>
    </div>
  );
};

export default Navbar;
