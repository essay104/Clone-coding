import React from "react";
import Header from "../component/Header";
import { useState } from "react";
import Button from "../component/Button";

const Home = () => {
  const [pivotDate, setPivotDate] = useState(new Date());

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  }월`;

  return (
    <>
      <Header
        title={headerTitle}
        leftChild={<Button text="<" onClick={onDecreaseMonth} />}
        rightChild={<Button text=">" onClick={onIncreaseMonth} />}
      />
    </>
  );
};

export default Home;
