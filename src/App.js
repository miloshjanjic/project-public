import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Login from './Login';
import Profile from './Profile';
import Footer from './Footer';
import Register from './Register';
import RecipesList from './RecipesList';
import RecipesProfile from './RecipesProfile';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="app-second">
          <Switch>
            <Route path="/" exact component={Main} />
           
            <Route path="/login" exact component={Login} />

            <Route path="/profile" exact component={Profile} />
            

            <Route path="/register" exact component={Register} />
              
            <Route path="/recipes-list" component={RecipesList} />
            
            <Route path="/recipes-profile" exact component={RecipesProfile} />
             
          </Switch>

          <Footer />

        </div>
      </div>
    </Router>
  );
};

export default App;