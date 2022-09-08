import React from "react";
import "../styles/Voucher.css";

function Voucher({ image }) {
  return (
    <div className="voucher">
      <p>save upto rs 150</p>
      <img src={image} alt="" />
      <p>Use code FIRST</p>
    </div>
  );
}

export default Voucher;
