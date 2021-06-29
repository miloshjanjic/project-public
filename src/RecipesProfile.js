import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { createRecipe, updateRecipe } from './actions/index';
import logo from './assets/images/icon_back_white.svg';
import './style/recipeProfile.css';

const RecipesProfile = () => {
  const [postData, setPostData] = useState({
    recipeTitle: '', category: '', preparationTime: '', noPeople: '', shortDescription: '', recipe: ''
  });
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault(); // not to get refresh at the browser

    dispatch(createRecipe(postData));
    setPostData({ recipeTitle: '', category: '', preparationTime: '', noPeople: '', shortDescription: '', recipe: '' });

  };

  return (
    <div className="recipes-profile">

      <h2>My Recipes</h2>
      <image src={logo} alt="icon_back_white" className="icon_back_white" />
      <h3>Create recipe</h3>

      <div className="" >
        <div className="recipe-div1">

        </div>
        <div className="recipe-div">
          <form onSubmit={handleSubmit} >
            <div className="div1">
              <h4>Recipe Image</h4>
              <input
                type="file"
                accept="image"
                alt="avatar-image"
                value=""

              /> <br />
              <input
                type="button"
                value="upload image"
              // onChange={}

              /><br /><br />
            </div>
            <div className="div2">
              <input
                required
                placeholder="Recipe Title"
                type="text"
                value={postData.recipeTitle}
                onChange={(e) => setPostData({ ...postData, recipeTitle: e.target.value })}
                className="div-title"
              /> <br /><br />

              <select
                required
                // placeholder="Category"
                value={postData.category}
                onChange={(e) => {
                  setPostData({ ...postData, category: e.target.value })
                }}
                className="div-change"
              >
                <option value="breakfast">Breakfast</option>
                <option value="brunch">Brunch</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </select>

              <input
                required
                placeholder="Preparation Time"
                type="text"
                value={postData.preparationTime}
                onChange={(e) => setPostData({ ...postData, preparationTime: e.target.value })}
                className="div-change"
              />

              <input
                required
                placeholder="No People"
                type="text"
                value={postData.noPeople}
                onChange={(e) => setPostData({ ...postData, noPeople: e.target.value })}
                className="div-change"
              /> <br /><br />

              <input
                required
                placeholder="Short Description"
                type="text"
                value={postData.shortDescription}
                onChange={(e) => setPostData({ ...postData, shortDescription: e.target.value })}
                className="div-short"
              /><br /><br />
            </div>
            <div className="div3">
              <input
                required
                placeholder="Recipe"
                type="text"
                value={postData.recipe}
                onChange={(e) => setPostData({ ...postData, recipe: e.target.value })}
                className="long-recipe"
              /> <br /><br />
            </div>
            <input type="submit" value="SAVE" />
          </form>
        </div>
      </div>

    </div>
  )
};

export default RecipesProfile;

// const blog = { title, category, preparation, noPeople, description, recipe }

// fetch(url, {
  //   method: 'POST',
  //   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(blog)
// }).then(() => {
  //   console.log('Recipe added');
  // })

  // const [title, setTitle] = useState('');
  // const [category, setCategory] = useState('');
  // const [preparation, setPreparation] = useState('');
  // const [noPeople, setNoPeople] = useState('');
  // const [description, setDescription] = useState('');
  // const [recipe, setRecipe] = useState('');

  //  if(currentId === 0) {
    //    dispatch(createRecipe(postData));
    //    clear();
    //  } else {
      //    dispatch(updateRecipe(currentId,postData));
      //    clear();
      //  }

                // const post = useSelector((state) => (currentId ? state.posts.find(
                //   () => )));

                // const clear = () => {
                //   setCurrentId(0);
                //   setPostData({ title: '', category: '', preparation: '', noPeople: '', description: '',recipe: '' });
                // };

                // useEffect(() => {
                //   if (recipe) setPostData(post);
                // }, [post]);