import React from 'react';
import HomePage from './pages/homepage/homapage.component';
import { Switch ,Route } from 'react-router-dom';
import ShopPage from '../src/components/shop/shop.component';
import Header from './components/header/header.component';
import './App.css';


function App() {
  return (
    <div >
      <Header />
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
