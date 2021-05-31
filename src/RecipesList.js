import React from 'react';

import logo from './assets/images/icon_plus_white.svg';
import './style/recipeList.css';


const RecipesList = () => {

  // (task,)-gore kako props
  //! Delete recipe
  // const deleteRecipe = (id) => {
  //   setRecipe(recipe.filter((task) => task.id !== id))  
  // };

  return (
    <div className="recipes-list">

      <h2>My Recipes</h2>
      <img src={logo} alt="icon_plus" className="icon_plus" />

      <div className="recipes-table" >

      </div>

    </div>
  )
};

export default RecipesList;