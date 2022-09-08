import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../../context";
import "./description.css";
function Description(props) {
  const { movieList } = useContext(MovieContext);
  const [movieDetails, setMovieDetails] = useState({});
  useEffect(() => {
    let movieDetails = movieList.filter(
      (item) => item.id == props.match.params.id
    );
    setMovieDetails(movieDetails[0]);
  }, []);
  console.log(movieDetails);
  return (
    <div className="description">
      <img
        src={`../../assets/images/${movieDetails.miniImage}`}
        alt=""
        className="left-description"
      />
      <div className="right-description">
        <Link to="/" className="description-goback">
          <p>Back to all Movies</p>
        </Link>
        <h1 className="description-title">{movieDetails?.name}</h1>
        <p>
          {movieDetails?.duration} | {movieDetails?.genre} |{" "}
          {movieDetails?.type}
        </p>
        <p>
          <strong>About the Movie</strong>
        </p>
        <p>{movieDetails?.desc}</p>
        <Link to={`/seats/${movieDetails.id}`}>
          <button className="description-button">BOOK TICKET</button>
        </Link>
      </div>
    </div>
  );
}

export default Description;
