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
import Color from 'color';

function App() {
  const [colors, setColor] = useState(colorData);
  const [errorMessage, updateErrorMessage] = useState(null);
  
  const addColor = (colorAdd) => {
    setColor((prevColors) => {
      const trendingColors = prevColors.map(color => color.type === "trending")
      const currentColor = prevColors.find(color => color.colorName === colorAdd.colorName)
      if(currentColor){
        currentColor.counter++
        if(currentColor.counter >= 5 && currentColor.counter < 11){
          currentColor.type = "popular"
        } else if (currentColor.counter >= 11){
          currentColor.type = "trending"
          currentColor.timestamp =  (new Date().getTime()) / 1000;
        }
        return [...prevColors];
      } else {
        return [...prevColors, colorAdd];
      }
      
    });
  };

  const removeTrendingColor = () => {
    setColor((prevColors) => {
      prevColors.map(color => {
        if(color.type === "trending"){
          if ((((new Date().getTime()) / 1000) - color.timestamp) > 300){
            color.type = "popular"
            color.counter = 9
          }
        }
      })
      return [...prevColors];
    })
  }

  const deleteColor = (id) => {
    setColor((prevColors) => {
      return prevColors.filter((color) => color.id !== id);
    });
  };

  const editColorCount = (name, counter) => {
    setColor((prevColors) => {
      const currentColor = prevColors.find(color => color.colorName === name)
      if (currentColor){
        currentColor.counter = counter
        if(currentColor.counter < 5){
          currentColor.type = "upAndComing"
        } else if(currentColor.counter >= 5 && currentColor.counter < 11){
          currentColor.type = "popular"
        } else if (currentColor.counter >= 11){
          currentColor.type = "trending"
          currentColor.timestamp =  (new Date().getTime()) / 1000;
        }
      }
      return [...prevColors];
    });
  };

  return (
    <Router>
      <div className="App container">
        <Switch>
          <Route path="/" exact={true}>
            <Header />
            <UserScreen editColorCount={editColorCount} deleteColor={deleteColor} removeTrendingColor={removeTrendingColor} addColor={addColor} colors={colors} showError={updateErrorMessage}/>
          </Route>
        </Switch>
        <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
