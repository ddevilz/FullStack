import React from 'react'
import { Link } from 'react-router-dom'

function MealCard({meal}) {
  return (
    <Link to={`/${meal.idMeal}`}>
      <div>
        <h3>{meal.strMeal}</h3>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
    </Link>
    
  )
}

export default MealCard
