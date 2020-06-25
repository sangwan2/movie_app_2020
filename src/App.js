import React from "react";
import axios from "axios";
import Movies from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    //console.log(movies.data.data.movies);
    console.log(movies);
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((movies) => {
              //console.log(movies);
              return (
                <Movies
                  key={movies.id}
                  id={movies.id}
                  year={movies.year}
                  title={movies.title}
                  summary={movies.summary}
                  poster={movies.poster}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
