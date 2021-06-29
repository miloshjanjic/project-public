import {
  FETCH_ALL, FETCH_ONE, CREATE, UPDATE, DELETE, LIKE,
  BREAKFAST, BRUNCH, LUNCH, DINNER
} from '../constans/constans';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case FETCH_ONE:
      return posts.map((recipe) => (recipe._id === action.payload._id ? action.payload : recipe));

    case CREATE:
      return [...posts, action.payload];

    case UPDATE:
      return posts.map((recipe) => (recipe._id === action.payload._id ? action.payload : recipe));

    case DELETE:
      return posts.filter((recipe) => recipe._id !== action.payload._id);

    case LIKE:
      return posts.map((recipe) => (recipe._id === action.payload._id ? action.payload : recipe));


    case BREAKFAST:
      // return posts.map((recipe) => (recipe.category === action.payload.category ? action.payload : recipe));
      return action.payload;

    case BRUNCH:
      return action.payload;

    case LUNCH:
      return action.payload;

    case DINNER:
      return action.payload;

    default: return posts;
  }
};
// reduser is a function that takes the current instance of the store and returs the updated store
// we do not call the reduser directly,we just work whit the store,the store is in charge of calling the reduser 
// state ???