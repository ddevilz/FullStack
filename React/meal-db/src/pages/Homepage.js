import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/Searchbar'
import MealCard from '../components/MealCard'

const HomePage = () => {
  const [meals, setMeals] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      setMeals(response.data.meals);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Meal App</h1>
      <SearchBar onSearch={handleSearch} />
      {meals && meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)}
    </div>
  );
};

export default HomePage;
