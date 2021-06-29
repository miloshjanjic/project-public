/*  action creators are function that return an action; and  action is just an object that has a type and a payload ; action is just a plain javaScript object that describes what just happend
The Dispatch is like an entry point to our store so pay dispatching actions you're essentially sending every actions through the same entry point,so we have central place where we can control what should happen every time the user perform an action */
import {
  FETCH_ALL, FETCH_ONE, CREATE, UPDATE, DELETE, LIKE,
  BREAKFAST, BRUNCH, LUNCH, DINNER
} from '../constans/constans';
import * as api from '../api/index';

export const getRecipes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRecipes();
    dispatch({
      type: FETCH_ALL,
      payload: data.recipes
    });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const getRecipe = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchRecipe(id);
    dispatch({
      type: FETCH_ONE,
      payload: data.recipeOne
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createRecipe = (recipe) => async (dispatch) => {
  try {
    const { data } = await api.createRecipe(recipe);
    dispatch({
      type: CREATE,
      payload: data.postRecipe
    });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateRecipe = (id, recipe) => async (dispatch) => {
  try {
    const { data } = await api.updateRecipe(id, recipe);
    dispatch({
      type: UPDATE,
      payload: data.updateRecipe
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteRecipe = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteRecipe(id);
    dispatch({
      type: DELETE,
      payload: data.deleteR
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const likeRecipe = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeRecipe(id);
    dispatch({
      type: LIKE,
      payload: data.updatedRecipe
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const breakfast = () => async (dispatch) => {
  try {
    const { data } = await api.breakfast();
    dispatch({
      type: BREAKFAST,
      payload: data.breakfastR
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const brunch = () => async (dispatch) => {
  try {
    const { data } = await api.brunch();
    dispatch({
      type: BRUNCH,
      payload: data
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const lunch = () => async (dispatch) => {
  try {
    const { data } = await api.lunch();
    dispatch({
      type: LUNCH,
      payload: data
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const dinner = () => async (dispatch) => {
  try {
    const { data } = await api.dinner();
    dispatch({
      type: DINNER,
      payload: data
    });
  } catch (error) {
    console.log(error.message);
  }
};