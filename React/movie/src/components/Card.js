import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Card() {
  const { imdbID } = useParams()
  const [movie, setMovie] = useState([])
  
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        let response = await axios(`https://www.omdbapi.com/?apikey=80c79a35&i=${imdbID}`)
        setMovie(response.data)
      } catch(error) {
        console.error(error);
      }
    }
    fetchMovie()
  },[imdbID])


  return (
    <div>
      <h1>here is card: {movie.Title}</h1>
    </div>
  )
}

export default Card
