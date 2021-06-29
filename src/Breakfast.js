import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from './Card';
import { breakfast } from './actions/index';

export function Breakfast = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(breakfast());
  }, [dispatch]);

  return (
    <div className="">
      <h2>BREAKFAST</h2>
      <div className="">
        {/* <ul> */}
          {recipes.filter(recipe => (
            <Card key={recipe.category} recipe={recipe} />
          ))}
        {/* </ul> */}
      </div>
      <div className="">

      </div>

    </div>
  )
};