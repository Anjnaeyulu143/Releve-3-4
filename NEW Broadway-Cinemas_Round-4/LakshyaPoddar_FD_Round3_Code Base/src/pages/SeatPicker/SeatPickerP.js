import { ContactSupport } from "@material-ui/icons";
import React, { useState, useContext, useEffect } from "react";
import SeatPicker from "react-seat-picker";
import { MovieContext } from "../../context";
import "./SeatPicker.css";
function SeatPickerP(props) {
  const { movieList, setBookSeats } = useContext(MovieContext);
  const [seatsBooked, setSeatsBooked] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [timing, setTiming] = useState(0);
  const [seatAvailability, setSeatAvailability] = useState(undefined);

  useEffect(() => {
    setSeatsBooked([]);
    setSeatAvailability(undefined);
    let md = movieList.filter((item) => item.id == props.match.params.id);
    setMovieDetails(md[0]);
    let seatsData = md[0]?.seats[timing];
    let row = seatsData.map((items, indexs) => {
      let finalData = items.map((item, index) => {
        let temp = {
          id: indexs * 15 + index,
          number: index,
          isReserved: item,
          tooltip: item ? "Reserved" : "Cost: RS 120",
        };
        return temp;
      });
      return finalData;
    });
    setSeatAvailability(row);
  }, [timing]);

  const addSeat = ({ row, number, id }, addCb) => {
    setSeatsBooked([...seatsBooked, { row: row, number: number }]);
    addCb(row, number, id);
  };
  console.log(seatsBooked);
  const removeSeat = ({ row, number, id }, removeCb) => {
    let remainingSeats = seatsBooked.filter(
      (seat) => seat.row == row && seat.number == number
    );
    setSeatsBooked(remainingSeats);
    removeCb(row, number);
  };

  const submit = () => {
    setBookSeats(seatsBooked, movieDetails.id, timing);
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
          <button
            className={
              timing !== 0
                ? "seat-picker-time-button seat-picker-time-button-unslected"
                : "seat-picker-time-button"
            }
            onClick={() => {
              setSeatsBooked([]);
              setTiming(0);
            }}
          >
            3:00PM
          </button>
          <button
            className={
              timing !== 1
                ? "seat-picker-time-button seat-picker-time-button-unslected"
                : "seat-picker-time-button"
            }
            onClick={() => {
              setSeatsBooked([]);
              setTiming(1);
            }}
          >
            6:00PM
          </button>
          <button
            className={
              timing !== 2
                ? "seat-picker-time-button seat-picker-time-button-unslected"
                : "seat-picker-time-button"
            }
            onClick={() => {
              setSeatsBooked([]);
              setTiming(2);
            }}
          >
            9:00PM
          </button>
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
      {seatAvailability !== undefined ? (
        <SeatPicker
          addSeatCallback={addSeat}
          removeSeatCallback={removeSeat}
          rows={seatAvailability}
          maxReservableSeats={3}
          alpha
          visible
          selectedByDefault
          tooltipProps={{ multiline: true }}
        />
      ) : null}
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
