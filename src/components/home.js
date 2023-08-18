import React, { useState, useEffect } from "react";
import classes from '../style/home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch('https://swapi.dev/api/films');
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <div className={classes.album}><span>GET OUR LATEST ALBUM</span></div>
      <h3 className={classes.tour}>MOVIES LIST</h3>
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
