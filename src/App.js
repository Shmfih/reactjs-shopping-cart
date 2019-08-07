import React from 'react';
import logo from './logo.svg';
import './HomePage.scss';
import HomePage from './components/HomePage/HomePage';
import Categories from './components/Categories/Categories';
import Single from './components/Single/Single';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Benefit from './components/Categories/Benefit/Benefit';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product/:id" component={Single} />
          <Route exact path="/categories" component={Categories} />
        </Switch>
      <Benefit />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
