import React, { useContext } from "react";
import { MovieContext } from "../../context";
import Carousel from "react-material-ui-carousel";
import { useHistory } from "react-router-dom";

import "./home.css";
function Home() {
  const { movieList } = useContext(MovieContext);
  const history = useHistory();
  const handleClick = (id) => history.push(`/description/${id}`);
  return (
    <>
      <Carousel className="testing">
        {movieList.map((item) => (
          <img
            src={`../../assets/images/${item.image}`}
            alt=""
            className="home-carousel"
            onClick={() => handleClick(item.id)}
          />
        ))}
      </Carousel>
      <div className="home-movie-list">
        {movieList.map((item) => (
          <img
            src={`../../assets/images/${item.miniImage}`}
            alt=""
            className="home-image-mini"
            onClick={() => handleClick(item.id)}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
