import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const PagerContext = createContext();

export const PagerProvider = ({ children }) => {
  const [pager, setPager] = useState({ 1: true, 2: false, 3: false });
  const navigate = useNavigate();

  const setPagerChanger = (id) => {
    setPager({
      1: id === 1,
      2: id === 2,
      3: id === 3,
    });
    if (id === 1) {
      navigate("/");
    } else if (id === 2) {
      navigate("/about");
    } else if (id === 3) {
      navigate("/projects");
    }
  };

  return (
    <PagerContext.Provider value={{ pager, setPagerChanger }}>
      {children}
    </PagerContext.Provider>
  );
};

export const usePager = () => {
  return useContext(PagerContext);
};
