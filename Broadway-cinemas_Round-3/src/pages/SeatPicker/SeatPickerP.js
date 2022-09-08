import React, { useState, useContext, useEffect } from "react";
import SeatPicker from "react-seat-picker";
import { MovieContext } from "../../context";
import "./SeatPicker.css";
function SeatPickerP(props) {
  const { movieList } = useContext(MovieContext);
  const [seatsBooked, setSeatsBooked] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  useEffect(() => {
    let movieDetails = movieList.filter(
      (item) => item.id == props.match.params.id
    );
    setMovieDetails(movieDetails[0]);
  }, []);
  const rows = [
    [
      { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you" },
      { id: 2, number: 2, tooltip: "Cost: RS 125" },
      null,
      {
        id: 3,
        number: "3",
        isReserved: true,
        orientation: "east",
        tooltip: "Reserved by Lakshya",
      },
      { id: 4, number: "4", orientation: "west" },
      null,
      { id: 5, number: 5 },
      { id: 6, number: 6 },
    ],
    [
      {
        id: 7,
        number: 1,
        isReserved: true,
        tooltip: "Reserved by Sharma",
      },
      { id: 8, number: 2, isReserved: true },
      null,
      { id: 9, number: "3", isReserved: true, orientation: "east" },
      { id: 10, number: "4", orientation: "west" },
      null,
      { id: 11, number: 5 },
      { id: 12, number: 6 },
    ],
    [
      { id: 13, number: 1 },
      { id: 14, number: 2 },
      null,
      { id: 15, number: 3, isReserved: true, orientation: "east" },
      { id: 16, number: "4", orientation: "west" },
      null,
      { id: 17, number: 5 },
      { id: 18, number: 6 },
    ],
    [
      { id: 19, number: 1, tooltip: "Cost: Rs 256" },
      { id: 20, number: 2 },
      null,
      { id: 21, number: 3, orientation: "east" },
      { id: 22, number: "4", orientation: "west" },
      null,
      { id: 23, number: 5 },
      { id: 24, number: 6 },
    ],
    [
      { id: 25, number: 1, isReserved: true },
      { id: 26, number: 2, orientation: "east" },
      null,
      { id: 27, number: "3", isReserved: true },
      { id: 28, number: "4", orientation: "west" },
      null,
      { id: 29, number: 5, tooltip: "Cost: Rs 100" },
      { id: 20, number: 6, isReserved: true },
    ],
  ];
  const addSeat = ({ row, number, id }, addCb) => {
    console.log(`Added seat ${number}, row ${row}, id ${id}`);
    setSeatsBooked([...seatsBooked, `${row}${number}`]);
    addCb(row, number, id);
  };
  const submit = () => {
    window.alert(
      `${seatsBooked} for movie ${movieDetails.name}, timing 3:00PM. See you at the cinemas`
    );
  };
  return (
    <div className="seat-picker-container">
      <h2>{movieDetails.name}</h2>
      <p>Tomorrow, September 10, 2021 </p>
      <div className="seat-picker-header">
        <div>
          <button className="seat-picker-time-button">3:00PM</button>
          <button className="seat-picker-time-button">6:00PM</button>
          <button className="seat-picker-time-button">9:00PM</button>
        </div>
        <div className="seat-picker-header-right">
          <div
            style={{
              backgroundColor: "gray",
              width: "20px",
              height: "20px",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          ></div>
          Sold
          <div
            style={{
              backgroundColor: "#4fc3f7",
              width: "20px",
              height: "20px",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          ></div>
          Available
          <div
            style={{
              backgroundColor: "green",
              width: "20px",
              height: "20px",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          ></div>
          Selected
        </div>
      </div>
      <SeatPicker
        addSeatCallback={addSeat}
        rows={rows}
        maxReservableSeats={3}
        alpha
        visible
        selectedByDefault
        tooltipProps={{ multiline: true }}
      />
      <button
        className="description-button"
        style={{ marginTop: "50px" }}
        onClick={submit}
      >
        BOOK TICKET
      </button>
    </div>
  );
}

export default SeatPickerP;
