import './App.css';
import React, { useState } from 'react'

import Footer from './components/Footer/Footer';
import AlertComponent from './components/AlertComponent/AlertComponent';

import {
  BrowserRouter as Router
} from "react-router-dom";
import UserScreen from './components/UserScreen/UserScreen';
import Header from './components/Header/Header';
import { colorData } from './data';

function App() {
  const [colors, setColor] = useState(colorData);
  const [colorsDatabase, setColorDatabase] = useState([]);
  const [errorMessage, updateErrorMessage] = useState(null);
  
  const CanColorBeBlocked = (colorAdded) => {
    const trendingColors = colors.filter(color => color.type === "trending")
    const currentColorPassed = colors.find(color => color.colorName === colorAdded.colorName && color.counter === 10)

    if (trendingColors.length >=3 && currentColorPassed){
      trendingColors.sort(function (a, b) {
        return a.timestamp - b.timestamp
      });
      var firstColorOnList = trendingColors.shift()
      const currentColor = colors.find(color => color.id === firstColorOnList.id)
      currentColor.type = "popular"
      currentColor.counter = 9
    }
  }

  // const fetchColorDataBase = async () => {
  //   let { data: colors, error } = await supabase
  //           .from("colors")
  //           .select("*")
  //           .order("id", { ascending: false });
    
  // }

  

  function addCurrentColor(currentColor) {
    if (currentColor.counter < 5) {
      currentColor.type = "upAndComing";
    } else if (currentColor.counter >= 5 && currentColor.counter < 11) {
      currentColor.type = "popular";
    } else if (currentColor.counter >= 11) {
      currentColor.type = "trending";
      currentColor.timestamp = (new Date().getTime()) / 1000;
    }
  }

  const addColor = (colorAdded) => {
    setColor((prevColors) => {
      CanColorBeBlocked(colorAdded)
      const currentColor = prevColors.find(color => color.colorName === colorAdded.colorName)
      if(currentColor){
        currentColor.counter++;
        addCurrentColor(currentColor);
        return [...prevColors];
      } else {
        return [...prevColors, colorAdded];
      }
      
    });
  };

  const addColorDatabase = async (colorAdded) => {
    
  }

  const threeTrending = () => {
    setColor((prevColors) => {
      const arrayTimestamp = []
      prevColors.map(color => {
        if(color.type === "trending"){
          arrayTimestamp.push(color.timestamp)
        }
      })
      return [...prevColors];
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

  const subractColor = (name) => {
    setColor((prevColors) => {
      const currentColor = prevColors.find(color => color.colorName === name)
      if (currentColor){
        currentColor.counter--
        addCurrentColor(currentColor);
      }
      return [...prevColors];
    });
  };

  return (
    <Router>
      <div className="App container">
        <Header />
        <UserScreen threeTrending={threeTrending} editColorCount={subractColor} deleteColor={deleteColor} removeTrendingColor={removeTrendingColor} addColor={addColor} colors={colors} showError={updateErrorMessage}/>
        <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


