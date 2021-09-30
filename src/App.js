import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import "./App.css";
import Home from './Pages/Home'
import Country from './Pages/Country'
import {addToCart, removeFromCart} from './Redux/action'

function App() {
 const dispatch = useDispatch()
 const fakeCountry = {name: 'Netherlands', population: 5000000, region: 'Europe'}
 const insertToCart = () => {
   dispatch(addToCart(fakeCountry))
 }
 
 const removeCart = () => {
   dispatch(removeFromCart('Netherlands'))
 }
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>{<Home/>}</Route>
        <Route exact path='/countries/:countryName' children={<Country/>}></Route>
      </Switch>
      <button onClick={insertToCart}>Add Country</button>
      <button onClick={removeCart}>Remove Country</button>
    </div>
  );
}

export default App;