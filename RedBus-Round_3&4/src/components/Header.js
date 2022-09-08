import React from "react";
import "../styles/Header.css";
import Logo from "../assets/RedbusImages/Redbus.png";

function Header() {
  return (
    <div className="header">
      <div className="header__navbar">
        <div>
          <img src={Logo} alt="" />
          <p>BUS TICKETS</p>
          <p>
            rPool<sup>New</sup>
          </p>
          <p className="bus-hire">BUS HIRE</p>
        </div>

        <div>
          <p>MANAGE BOOKING</p>
          <i class="fa-solid fa-angle-down down-icon"></i>
          <i class="fa-solid fa-circle-user user-icon"></i>
          <i class="fa-solid fa-angle-down down-icon"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
