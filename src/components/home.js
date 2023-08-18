import React, { useState} from "react";
import classes from '../style/home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const [fetching, setFetching] = useState(false);

  const fetchMovies = async () => {
    try {
      setFetching(true);
      const response = await fetch('https://swapi.dev/api/films');
      const data = await response.json();
      setMovies(data.results);
      setFetching(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setFetching(false);
    }
  };
  return (
    <div>
      <div className={classes.album}><span>GET OUR LATEST ALBUM</span></div>
      <h3 className={classes.tour}>TOURS</h3>
      <button onClick={fetchMovies} disabled={fetching} className={classes.tour}>
        {fetching ? 'Fetching...' : 'Fetch Movies'}
      </button>
      {movies.map((movie, index) => (
        <p className={classes.item} key={index}>
          <span className={classes.itemSpan}>{movie.title}</span>
          <span className={classes.itemSpan}>{movie.director}</span>
          <span className={classes.itemSpan}>{movie.release_date}</span>
          <span className={classes.itemSpan}><button>buy tickets</button></span>
        </p>
      ))}
    </div>
  );
}

export default Home;
