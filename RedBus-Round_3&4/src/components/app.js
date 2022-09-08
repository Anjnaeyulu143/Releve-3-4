import React from "react";
import "../styles/app.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import LandingPage from "./LandingPage";
import SeatBooking from "./SeatBooking";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/bus-tickets" />
        </Route>

        <Route path="/bus-tickets">
          <LandingPage />
        </Route>
        <Route path="/seat-booking">
          <SeatBooking />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
