import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import FormUpdateMovie from "./FormUpdateMovie/FormUpdateMovie"
import axios from 'axios';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [movie, setMovie] = useState()

  const getMovieList = () => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => setMovieList(res.data))
      .catch(err => console.log(err.response));
  };

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const putMessage = movie => {
    axios
      .put(`http://localhost:5000/movies/${movie.id}`)
      .then(res => {
        console.log(res)
        
        // referencing data from API


        movie.id = res.data.id
        movie.title = res.data.title
        movie.director = res.data.director
        movie.metascore = res.data.metascore
        movie.stars = res.data.stars

        setMovie(movie)

      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <>
      <SavedList list={savedList} />

      <Route exact path="/">
        <MovieList movies={movieList} />
      </Route>

      <Route path="/movies/:id">
        <Movie addToSavedList={addToSavedList} />
      </Route>

      <Route path="/update-movie/:id">
        <FormUpdateMovie putMessage={putMessage} setMovie={setMovie} movie = {movie} />
      </Route>
    </>
  );
};

export default App;
