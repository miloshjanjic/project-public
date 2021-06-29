import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; //import hook from redux, that allows to dispatch an action;
import { getRecipe } from './actions/index';

// import './style/recipeDetail.css';

const RecipeDetail = () => {
  const dispatch = useDispatch();

  const recipes = useSelector(state => state.posts); 
  
  useEffect(() => {
    dispatch(getRecipe());
  }, [dispatch]);

  return (
    <div className="recipe-detail">
      {!recipes.length ? <h2>No recipes here !!</h2> :
        <div>{recipes.map(recipe => {
          return (
            <div key={recipe._id}>
              <h3>{recipe.recipeTitle}</h3>
              <h3>{recipe.category}</h3>
              <h3>{recipe.preparationTime}</h3>
              <h3>{recipe.noPeople}</h3>
              <h3>{recipe.shortDescription}</h3>
              <h3>{recipe.recipe}</h3>
            </div>
          )
        })}</div>
      }
    </div>
  )
};

export default RecipeDetail;

// export function Breakfast () {
//     const dispatch = useDispatch();
//     const recipes = useSelector(state => state.RecipesReducer); //ime na file za recipe-reducer
//     useEffect(() => {
//         dispatch(getAllRecipes());
//     },[dispatch]);
//     return(
//         <div id="breakfast">
//             <div className='h2'>Breakfast</div>
//              <div>
//                 {!recipes.length ? <h2>No recipes here yet...</h2> : 
//                 <div>{recipes.map(recipe => {
//                     return(
//                         <div key={recipe._id}>
//                             {recipe.title}
//                             <Recipe recipe={recipe}/>
//                         </div>
//                     )
//                 })}</div>
//             }
//             </div> 
//         </div>
//     )
// }

// Treba da mu dozvolis requesti od site
// Vo postavuvanjeto treba da dodades access control allow origin * da bide
// Pobaraj setup za node-ot