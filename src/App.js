import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/hompepage/homepage.component';
import Hats from './pages/hatspage/hats.component';
import {Mens, Womens, Jackets, Sneakers} from './pages/clothingspage/clothings.component';

function App() {
  return (
    <div>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop/sneakers' component={Sneakers}/>  
        <Route exact path='/shop/hats' component={Hats}/>
        <Route exact path='/shop/jackets' component={Jackets}/>
        <Route exact path='/shop/mens' component={Mens}/>
        <Route exact path='/shop/womens' component={Womens}/>
     </div>
  );
}

export default App;
