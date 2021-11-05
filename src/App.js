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
      const currentColor = prevColors.find(color => color.colorName == colorAdd.colorName)
      if(currentColor){
        currentColor.counter++
        if(currentColor.counter > 5 && currentColor.counter < 11){
          currentColor.type = "popular"
        } else if (currentColor.counter >= 11){
          currentColor.type = "trending"
        }
        return [...prevColors];
      } else {
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
