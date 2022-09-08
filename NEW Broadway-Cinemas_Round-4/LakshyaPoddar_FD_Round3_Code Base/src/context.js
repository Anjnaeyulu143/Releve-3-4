import React, { Component, createContext } from "react";
export const MovieContext = createContext();

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: [
        {
          name: "Shang-Chi and the Legend of the Ten Rings",
          miniImage: "movie1mini.jpg",
          image: "movie1.jpg",
          desc: "Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.",
          duration: "2h 12m",
          genre: "Action, Adventure, Fantasy",
          type: "UA",
          id: 1,
          seats: {
            0: [
              [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
              ],
              [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
              ],
              [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
              ],
              [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
              ],
            ],
            1: [
              [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
              ],
              [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
              ],
              [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
              ],
              [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
              ],
            ],
            2: [
              [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
              ],
              [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
              ],
              [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
              ],
              [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
              ],
            ],
          },
        },
        {
          name: "Fast and Furious 9",
          miniImage: "movie2mini.jpg",
          image: "movie2.jpg",
          desc: "Dom`s peaceful life with his wife Letty and son Brian is shattered when Dom`s past catches up to him. The gang is up against the most skilled assassin and high-performance driver - his little brother Jakob.",
          duration: "2h 23m",
          genre: "Action,Adventure,Crime,Thriller",
          type: "UA",
          id: 2,
        },
        {
          name: "Bell Bottom",
          miniImage: "movie3mini.jpg",
          image: "movie3.jpg",
          desc: "Amongst multiple heinous airplane hijacks, India was made to face another such challenge in 1984. BellBottom, a RAW agent played by Akshay Kumar sees through the plan and thus, begins India`s first covert operation.A story inspired on true events, led by BellBottom, that went on to create one of the most defining moments of the country.",
          duration: "2h 10m",
          genre: "Action, Thriller",
          type: "UA",
          id: 3,
        },
        {
          name: "Chehre",
          miniImage: "movie4mini.jpg",
          image: "movie4.jpg",
          desc: "An 80-year-old criminal lawyer along with his friends has a penchant for real-life games. They conduct a mock trial and decide if justice has been served, if not they make sure justice has been served.",
          duration: "2h 19m",
          genre: "Mystery, Thriller",
          type: "UA",
          id: 4,
        },
      ],
    };
  }
  bookSeats = (selectedSeats, movieId, timing) => {
    let movieData = this.state.movieList.filter((item) => item.id == movieId);
    let updatedMovieData = selectedSeats.forEach((seat) => {
      let rowno;
      if (seat.row == "A") rowno = 0;
      if (seat.row == "B") rowno = 1;
      if (seat.row == "C") rowno = 2;
      if (seat.row == "D") rowno = 3;
      movieData[0].seats[timing][rowno][seat.number] = true;
    });
    console.log(movieData);
    let remainingMovieData = this.state.movieList.filter(
      (item) => item.id != movieId
    );
  };
  render() {
    return (
      <MovieContext.Provider
        value={{
          movieList: this.state.movieList,
          setBookSeats: this.bookSeats,
        }}
      >
        {this.props.children}
      </MovieContext.Provider>
    );
  }
}

export default MovieDetails;
