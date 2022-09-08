import React from "react";
import Image1 from "../assets/RedbusImages/heroimage2.png";
import "../styles/HeroImage.css";
import { ReactComponent as SafetyIcon } from "../assets/RedbusImages/safetyplus.svg";
import SearchBar from "./SearchBar";

function HeroImage() {
  return (
    <div className="hero-image">
      <img src={Image1} alt="" />
      <span className="searchBar-div">
        <SearchBar />
      </span>
      <div className="safety-div">
        <SafetyIcon />
        <div className="safety-text-div">
          <h4>Introducing Safety+ Program</h4>
          <p>A unique certification program that ensures safety in all buses</p>
        </div>
        <button>Know More</button>
      </div>
    </div>
  );
}

export default HeroImage;
