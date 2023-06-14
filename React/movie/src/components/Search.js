import axios from 'axios';
import React, { useState } from 'react';
import Card from './Card';


function Search() {
  const [inputText, setInputText] = useState('')
  const [movieData, setMovieData] = useState({})

  const fetchData = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=80c79a35&s=${inputText}`)
      setMovieData(response.data.Search)
    } catch(error) {
      console.error(error)
    }
  }

  return (
    <div>
      <form onSubmit={fetchData}>
        <input 
          type='text'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>

      {movieData.length > 0 ? (
        movieData.map((movie) => (
          <div key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <h1>Title: {movie.Title}</h1>
            <small>Year: {movie.Year}</small>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}

      <Card movie={movieData}/>
    </div>
  )
}

export default Search
