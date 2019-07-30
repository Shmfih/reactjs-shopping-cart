import React from 'react';
import logo from './logo.svg';
import './HomePage.scss';
import HomePage from './components/HomePage/HomePage';
import Categories from './components/Categories/Categories';
import Single from './components/Single/Single';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/categories">Categories</NavLink>
        <NavLink to="/Single">Single</NavLink>
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/single" component={Single} />
      <Route exact path="/categories" component={Categories} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
