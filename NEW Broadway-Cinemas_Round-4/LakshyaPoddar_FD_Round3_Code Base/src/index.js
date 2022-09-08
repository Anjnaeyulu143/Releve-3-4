import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import store from "./store/store";
import MovieDetails from "./context";

import Home from "./pages/Home/Home";
import Description from "./pages/Description/Description";
import SeatPickerP from "./pages/SeatPicker/SeatPickerP";
import "./index.scss";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MovieDetails>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/description/:id" exact component={Description} />
          <Route path="/seats/:id" exact component={SeatPickerP} />
        </Switch>
      </MovieDetails>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
