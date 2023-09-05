import React, { useState, useEffect } from "react";
import classes from '../style/home.module.css';


const Home = () => {
  const [movies, setMovies] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    releasedate: '',
    image:null,
  });

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch('https://ecommerce-ad7ec-default-rtdb.firebaseio.com/movies.json');
        const data = await response.json();
        if (data) {
          const moviesArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
          setMovies(moviesArray);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    fetchMovies();
  }, []);

  const handleDeleteMovie = async (id) => {
    try {
      const response = await fetch(`https://ecommerce-ad7ec-default-rtdb.firebaseio.com/movies/${id}.json`, {
        method: "DELETE"
      });

      if (response.ok) {
        setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
      } else {
        console.error("Error deleting movie from Firebase");
      }
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };
  const handleInputChange = (event) => {
    const { name, value} = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddMovie = async () => {
    if (formData.title && formData.director && formData.releasedate && formData.image) {
      try {
        const newMovie = {
          email: formData.title,
          director: formData.director,
          releasedate: formData.releasedate,
          image:formData.image,
        };

        const response = await fetch(
          "https://ecommerce-ad7ec-default-rtdb.firebaseio.com/movies.json", 
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newMovie)
          }
        );

        if (response.ok) {
          setMovies((prevMovies) => [...prevMovies, newMovie]);
          setFormData({
            title: '',
            director: '',
            releasedate: '',
            image:null,
          });
        } else {
          console.error("Error adding movie to Firebase");
        }
      } catch (error) {
        console.error("Error adding movie:", error);
      }
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
          type="date"
          name="releasedate"
          value={formData.releasedate}
          onChange={handleInputChange}
          placeholder="ReleaseDate"
        />
         <input
          type="file" 
          value={formData.image}
          name="image"
          accept="image/*"
          onChange={handleInputChange}
        />

        <button type="button" onClick={handleAddMovie}>
          Add Movie
        </button>
      </form>
      {movies.map((movie, index) => (
         <div className={classes.item} key={index}>
         <span className={classes.itemSpan}>{movie.title}</span>
         <span className={classes.itemSpan}>{movie.director}</span>
         <span className={classes.itemSpan}>{movie.releasedate}</span>
         
         <img src={movie.image} alt="hb" className={classes.image} />
         <button onClick={() => handleDeleteMovie(movie.id)}>Delete Movie</button>
       </div>
      ))}  
    </div>
  );
}

export default Home;
