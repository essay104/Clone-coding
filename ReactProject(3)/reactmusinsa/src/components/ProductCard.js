import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="produtcard">
      <img src={item?.img} alt="imginfo" />
      <div>Concious Choice</div>
      <div>{item?.title}</div>
      <div> \{item?.price}</div>
      <div>{item?.new === true ? "신상품" : ""}</div>
    </div>
  );
};

export default ProductCard;
