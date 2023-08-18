import React, { useState, useEffect, useCallback } from "react";
import classes from '../style/home.module.css';

const MovieItem = React.memo(({ title, director, releaseDate }) => (
  <p className={classes.item}>
    <span className={classes.itemSpan}>{title}</span>
    <span className={classes.itemSpan}>{director}</span>
    <span className={classes.itemSpan}>{releaseDate}</span>
    <span className={classes.itemSpan}><button>buy tickets</button></span>
  </p>
));

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    releaseDate: '',
  });

  const fetchMovies = useCallback(async () => {
    try {
      const response = await fetch('https://swapi.dev/api/films');
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddMovie = () => {
    if (formData.title && formData.director && formData.releaseDate) {
      setMovies((prevMovies) => [
        ...prevMovies,
        { ...formData, release_date: formData.releaseDate },
      ]);
      setFormData({
        title: '',
        director: '',
        releaseDate: '',
      });
    }
  };

  return (
    <div>
      <div className={classes.album}><span>GET OUR LATEST ALBUM</span></div>
      <h3 className={classes.tour}>MOVIES LIST</h3>
      <form className={classes.form}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="director"
          value={formData.director}
          onChange={handleInputChange}
          placeholder="Director"
        />
        <input
          type="text"
          name="releaseDate"
          value={formData.releaseDate}
          onChange={handleInputChange}
          placeholder="Release Date"
        />
        <button type="button" onClick={handleAddMovie}>
          Add Movie
        </button>
      </form>
      {movies.map((movie, index) => (
        <MovieItem
          key={index}
          title={movie.title}
          director={movie.director}
          releaseDate={movie.release_date}
        />
      ))}
    </div>
  );
}

export default Home;
