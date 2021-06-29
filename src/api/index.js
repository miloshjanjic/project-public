import axios from 'axios';

const url = 'http://localhost:4000/recipes';

export const fetchRecipes = () => axios.get(url);
export const fetchRecipe = (id) => axios.get(`${url}/${id}`);
export const createRecipe = (newRecipe) => axios.post(url,newRecipe);
export const updateRecipe = (id,updatedRecipe) => axios.patch(`${url}/${id}`,updatedRecipe);
export const deleteRecipe = (id) => axios.delete(`${url}/${id}`);
export const likeRecipe = (id) => axios.patch(`${url}/like/${id}`); 

export const breakfast = () => axios.get(`${url}/breakfast`);
export const brunch = () => axios.get(`${url}/brunch`);
export const lunch = () => axios.get(`${url}/lunch`);
export const dinner = () => axios.get(`${url}/dinner`);

// const url = 'http://localhost:9000
// const url = 'http://localhost:9004/api/v1/recipes';