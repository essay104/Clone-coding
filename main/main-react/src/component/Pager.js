import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import { usePager } from "../context/pagerContext";

const Pagers = styled(motion.div)`
  width: 500px;
  height: 10px;
  position: fixed;
  left: 50%;
  bottom: 1%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 1;
`;

const EachPager = styled(motion.span)`
  flex: 1;
  background-color: ${({ theme, setPager }) =>
    setPager ? theme.pager2 : theme.pager};
  cursor: pointer;
  transition: all 0.3s;
`;

const Pager = () => {
  const { pager, setPagerChanger } = usePager();

  return (
    <Pagers>
      <EachPager
        onClick={() => {
          setPagerChanger(1);
        }}
        setPager={pager[1]}
      />
      <EachPager
        onClick={() => {
          setPagerChanger(2);
        }}
        setPager={pager[2]}
      />
      <EachPager
        onClick={() => {
          setPagerChanger(3);
        }}
        setPager={pager[3]}
      />
    </Pagers>
  );
};

export default Pager;
