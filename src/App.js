import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/hompepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Mens from './pages/menspage/mens.component';
import Womens from './pages/womenspage/womens.component';
import Sneakers from './pages/sneakerspage/sneakers.component';
import Hats from './pages/hatspage/hats.component';
import Jackets from './pages/jacketspage/jackets.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/shop/sneakers' component={Sneakers}/>  
        <Route exact path='/shop/hats' component={Hats}/>
        <Route exact path='/shop/jackets' component={Jackets}/>
        <Route exact path='/shop/mens' component={Mens}/>
        <Route exact path='/shop/womens' component={Womens}/>
      </Switch>
     </div>
  );
}

export default App;
