import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRecipes } from './actions/index';
import Card from './Card';
import './style/main.css';

const Main = () => {
  // const [currentId, setCurrentId] = useState(0);

  const dispatch = useDispatch();

  const recipes = useSelector(state => state.posts);
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (

    <div className="main" >
      <h2>Main Page</h2>
      <div className="mainOne">
        <h3 >Fresh & New</h3>

        {recipes.slice(0, 3).map((recipe) => (
          <Card key={recipe._id} recipe={recipe} />
        ))}
      </div>
      <div className="mainTwo">
        <h3>Most Popular Recipes</h3>

        {recipes.slice(0, 6).map((recipe) => (
          <Card key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  )
};

export default Main;