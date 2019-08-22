import React from 'react';
import HomePage from './components/HomePage/HomePage';
import Categories from './components/Categories/Categories';
import Single from './components/Single/Single';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import CheckOut from './components/CheckOut/CheckOut';



function App() {
  
  return (
    <div>
      
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/product/:id" component={Single} />
          <Route exact path="/shop" component={Categories} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
