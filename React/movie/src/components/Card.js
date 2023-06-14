import React from 'react';

function Card(movie) {
  console.log(movie)
  return (
    <div>
      <h1>here is card: {movie.Title}</h1>
    </div>
  )
}

export default Card
