import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRecipes, likeRecipe, getRecipe } from './actions/index';

import './style/card.css';
import logoStar from './assets/images/icon_star.svg';
import logoTime from './assets/images/icon_time.svg';
import logoPlate from './assets/images/icon_plate.svg';
import logoArrow from './assets/images/icon_arrows_white.svg';


const Card = ({ recipe, setCurrentId }) => {
  // const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const recipes = useSelector(state => state.posts);
  useEffect(() => {
    dispatch(getRecipes());
    dispatch(likeRecipe());
    dispatch(getRecipe());
  }, [dispatch]);

  return (

    <div className="card" >
      {!recipes.length ? <h2>No recipes here !!</h2> :
        <div>{recipes.map(recipe => {
          return (
            <div key={recipe._id}>
              <img alt="" className="img-card" 
                
              />
              <div className="card-body"  >
                <h2>{recipe.recipeTitle}</h2>
                <p>{recipe.shortDescription}</p>

                <img src={logoTime} alt="img-time" className="img-time" />
                <span className="">{recipe.preparationTime}</span>

                <img src={logoPlate} alt="img-plate" className="img-plate" />
                <span className="">{recipe.noPeople}</span>

                <img src={logoStar} alt="img-star" className="img-star"
                  onClick={() => dispatch(likeRecipe(recipe._id))}
                />
                <span>{recipe.starCount}</span>

                {/* <Link to={'/recipe-detail'}> */}
                  <img src={logoArrow} alt="img-arrow" className="img-arrow" 
                    // onClick={() => dispatch(getRecipe(recipe._id))}
                  />
                {/* </Link> */}
              </div>
            </div>
          )
        }
        )}
        </div>
      }
    </div>
  )
};

export default Card;