import axios from 'axios';
import React, { useState } from 'react';

function Searchbar() {
  const [inputValue, setInputValue] = useState('');
  const [pokeData, setPokeData] = useState(null);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${inputValue}`
      );
      setPokeData(response.data);
      setError(null);
    } catch (error) {
      setPokeData(null);
      setError(error.message);
    }
  };
  console.log(pokeData)
  return (
    <div>
      <form>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="button" onClick={getData}>
          Submit
        </button>
      </form>

      {error && <div>Error: {error}</div>}

      {pokeData && (
        <div>
          <h2>{pokeData.name}</h2>
          <img
            src={pokeData.sprites.front_default}
            alt={`Sprite of ${pokeData.name}`}
          />
          <div>Height: {pokeData.height}</div>
          <div>Weight: {pokeData.weight}</div>
        </div>
      )}
    </div>
  );
}

export default Searchbar;
