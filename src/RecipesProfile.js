import React, { useState } from 'react';

import logo from './assets/images/icon_back_white.svg';

const RecipesProfile = () => {
  const [title, setTitle] = useState('');
  const [category, setCaategory] = useState('');
  const [preparation, setPreparation] = useState('');
  const [noPeople, setNoPeople] = useState('');
  const [description, setDescription] = useState('');
  const [recipe, setRecipe] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, category, preparation, noPeople, description, recipe }

    fetch('', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('Recipe added');
    })
  };
  return (
    <div className="recipes-profile">

      <h2>My Recipes</h2>
      <image src={logo} alt="icon_back_white" className="icon_back_white" />

      <div className="" >

        <div className="recipe-div1">

        </div>
        <div className="recipe-div2">
          <form onSubmit={handleSubmit} >
            <div className="recipes-image">
              <h4>Recipe Image</h4>
              <input

              />
              <input
                type="button"
                value="upload image"

              />

            </div>
            <label >Recipe Title</label>
            <input
              required
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            /> <br />
            <label >Category</label>
            <input
              required
              type="text"
              value={category}
              onChange={(e) => setCaategory(e.target.value)}
            />
            <label >Preparation Time</label>
            <input
              required
              type="text"
              value={preparation}
              onChange={(e) => setPreparation(e.target.value)}
            />
            <label >No People</label>
            <input
              required
              type="text"
              value={noPeople}
              onChange={(e) => setNoPeople(e.target.value)}
            /> <br />
            <label >Short Description</label>
            <input
              required
              type="text-area"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label >Recipe</label>
            <input
              required
              type="text-area"
              value={recipe}
              onChange={(e) => setRecipe(e.target.value)}
            /> <br />
            <input type="submit" value="SAVE" />
          </form>
        </div>
      </div>

    </div>
  )
};

export default RecipesProfile;