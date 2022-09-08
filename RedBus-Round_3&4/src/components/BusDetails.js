import React from "react";
import "../styles/BusDetails.css";

function BusDetails() {
  return (
    <div className="bus-details-main-div">
      <div className="bus__details-div">
        <div className="bus-info">
          <h3>Operator8</h3>
          <p>Non - A/C</p>
          <div className="icons">
            <i class="fa-solid fa-plug"></i>
            <i class="fa-solid fa-clapperboard"></i>
            <i class="fa-solid fa-lightbulb"></i>
            <i class="fa-solid fa-bus-simple"></i>
            <span className="linen">
              <i class="fa-solid fa-clock-rotate-left"></i> Reschedulable
            </span>
          </div>
        </div>

        <div className="sortby">
          <h3>16:00</h3>
          <p>Lucknow</p>
        </div>

        <div className="duration">
          <p>18h</p>
        </div>

        <div className="sortby">
          <h3>10:00</h3>
          <p>Haidargarh</p>
        </div>

        <div className="ratings">
          <p className="rating-badge">
            <i class="fa-solid fa-star"></i> 2.8
          </p>
          <p>
            <i class="fa-solid fa-user-group"></i> 33
          </p>
        </div>

        <div className="fare">
          <p className="big">
            INR <span className="bold">675</span>
          </p>
          <p>
            <span className="bigger">&#127991;</span> redDeal applied
          </p>
        </div>

        <div className="seats">
          <p className="big">
            <span className="bold">40</span> Seats Available
          </p>
          <p className="big">
            <span className="bold">20</span> Window
          </p>
        </div>
      </div>
      <div className="lastdiv flex">
        <pre>
          Amenities | Boarding and Dropping Points | Reviews | Booking Policies
          |{" "}
        </pre>
        <button className="view-seats">View Seats</button>
      </div>
    </div>
  );
}

export default BusDetails;
