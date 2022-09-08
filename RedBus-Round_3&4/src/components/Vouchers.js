import React from "react";
import Voucher1 from "../assets/RedbusImages/Coupon1.png";
import Voucher2 from "../assets/RedbusImages/Coupon2.png";
import Voucher3 from "../assets/RedbusImages/APSRTC_1.png";
import Voucher from "./Voucher";
import "../styles/Vouchers.css";

function Vouchers() {
  return (
    <div className="vouchers-div">
      <Voucher image={Voucher1} />
      <Voucher image={Voucher2} />
      <Voucher image={Voucher3} />
    </div>
  );
}

export default Vouchers;
