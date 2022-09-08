import React from "react";
import "../styles/SeatBooking.css";
import Header from "./Header";
import BusDetails from "./BusDetails";

function SeatBooking() {
  return (
    <div>
      <Header />
      <div className="breadcrumbs">
        <p>
          Home <i class="fa-solid fa-chevron-right"></i> Bus Tickets{" "}
          <i class="fa-solid fa-chevron-right"></i> Lucknow Bus{" "}
          <i class="fa-solid fa-chevron-right"></i> Lucknow To Haidargarh Bus
        </p>
        <p>Fare Starts from INR 100</p>
      </div>

      <p className="bus-details bold">
        Lucknow to Haidargarh <i class="fa-solid fa-chevron-left"></i>{" "}
        2021-08-23
        <i class="fa-solid fa-chevron-right"></i>
      </p>

      <div className="main-ticket-booking-area">
        <div className="left-column">
          <div className="filters">
            <h3>FILTERS</h3>
            <p>
              <i class="fa-solid fa-location-crosshairs"></i> Live Tracking
            </p>
            <p>
              <i class="fa-solid fa-clock-rotate-left"></i> Reschedulable
            </p>
          </div>

          <div className="dept-time">
            <h3>DEPARTURE TIME</h3>

            <p>
              <input type="checkbox" /> <i class="fa-solid fa-clock"></i> Before
              6 am
            </p>
            <p>
              <input type="checkbox" /> <i class="fa-solid fa-clock"></i> 6 am
              to 12 pm
            </p>
            <p>
              <input type="checkbox" /> <i class="fa-solid fa-clock"></i> 12 pm
              to 6 pm
            </p>
            <p>
              <input type="checkbox" /> <i class="fa-solid fa-clock"></i> After
              6 pm
            </p>
          </div>

          <div className="dept-time">
            <h3>BUS TYPES</h3>

            <p>
              <input type="checkbox" />{" "}
              <i class="fa-solid fa-clock-rotate-left"></i> SEATER
            </p>
            <p>
              <input type="checkbox" />{" "}
              <i class="fa-solid fa-clock-rotate-left"></i> SLEEPER
            </p>
            <p>
              <input type="checkbox" />{" "}
              <i class="fa-solid fa-clock-rotate-left"></i> AC
            </p>
            <p>
              <input type="checkbox" />{" "}
              <i class="fa-solid fa-clock-rotate-left"></i> NON - A/C
            </p>
          </div>

          <div className="dept-time">
            <h3>ARRIVAL TIME</h3>

            <p>
              <input type="checkbox" /> <i class="fa-solid fa-clock"></i> Before
              6 am
            </p>
            <p>
              <input type="checkbox" /> <i class="fa-solid fa-clock"></i> 6 am
              to 12 pm
            </p>
            <p>
              <input type="checkbox" /> <i class="fa-solid fa-clock"></i> 12 pm
              to 6 pm
            </p>
            <p>
              <input type="checkbox" /> <i class="fa-solid fa-clock"></i> After
              6 pm
            </p>
          </div>
        </div>

        <div className="right-column">
          <p className="security-line">
            <i class="fa-solid fa-shield-blank"></i> All bus ratings include
            safety as a major factor
          </p>

          <div className="buses-list flex">
            <p className="bold">BUSES LIST</p>
            <p className="head-sort">
              <span className="bold">SORT BY:</span> Departure
            </p>
            <p className="head-duration"> Duration</p>
            <p className="head-arrivals"> Arrivals</p>
            <p className="head-ratings"> Ratings</p>
            <p className="head-fare"> Fare</p>
            <p className="head-seats"> Seats Available</p>
          </div>

          {/* Bus details */}
          <BusDetails />
        </div>
      </div>
    </div>
  );
}

export default SeatBooking;
