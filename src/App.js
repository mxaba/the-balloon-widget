import './App.css';
import React, { useState } from 'react'

import Footer from './components/Footer/Footer';
import AlertComponent from './components/AlertComponent/AlertComponent';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UserScreen from './components/UserScreen/UserScreen';
import Header from './components/Header/Header';
import { colorData } from './data';


function App() {
  const [colors, setColor] = useState(colorData);
  const [errorMessage, updateErrorMessage] = useState(null);
  const [colorExist, setColorExist] = useState(false);

  const addColor = (colorAdd) => {
    setColor((prevColors) => {
      console.log(colorAdd)
      const newArray = prevColors.forEach(color => {
        if(color.colorName === colorAdd.colorName){
          color.counter++
          setColorExist(true)
          if(color.counter > 5 && color.counter < 11){
            color.type = "popular"
          } else if (color.counter >= 11){
            color.type = "trending"
          }
        }
      })
      if(colorExist){
        return [newArray];
      }
      else{
          return [...prevColors, colorAdd];
      }
    });
  };


  return (
    <Router>
      <div className="App container">
        <Switch>
          <Route path="/" exact={true}>
            <Header />
            <UserScreen addColor={addColor} colors={colors} showError={updateErrorMessage}/>
          </Route>
        </Switch>
        <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
