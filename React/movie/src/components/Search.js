import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Search() {
  const [inputText, setInputText] = useState('')
  const [movieData, setMovieData] = useState([])
  
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=80c79a35&s=${inputText}`)
      setMovieData(response.data.Search)
    } catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (inputText !== '') {
      fetchData();
    }
  }, [inputText]);

  return (
    <div>
      <form onSubmit={(e)=> {
        e.preventDefault();
        fetchData();
      }}>
        <input 
          type='text'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>

      {movieData ? (
        movieData && movieData.length > 0 ? (
          movieData.map((movie) => (
            <Link to={`/${movie.imdbID}`} key={movie.imdbID}>
              <div>
                <img src={movie.Poster} alt={movie.Title} />
                <h1>Title: {movie.Title}</h1>
                <small>Year: {movie.Year}</small>
              </div>
            </Link>
          ))
        ) : (
          null
        )
      ) : <p>No results found.</p>}
    </div>
  )
}

export default Search
