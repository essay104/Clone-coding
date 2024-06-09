import React from "react";
import { useMediaQuery } from "react-responsive";

export const Tablet = ({ children }) => {
  const isDesktop = useMediaQuery({
    maxWidth: 768,
  });
  return isDesktop ? children : null;
};

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({
    minWidth: 768,
  });
  return isDesktop ? children : null;
};

const MediaQueries = () => {
  return <div>MediaQueries</div>;
};

export default MediaQueries;
