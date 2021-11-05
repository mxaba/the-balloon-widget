import './App.css';
import React, { useState } from 'react'

import Footer from './components/Footer/Footer';
import AlertComponent from './components/AlertComponent/AlertComponent';
import Welcome from './components/Welcome/Welcome';

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
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);

  const addColor = (color) => {
    setColor((prevColors) => {
      return [...prevColors, color];
    });
  };

  return (
    <Router>
      <div className="App container">
      
        <Switch>
          <Route path="/" exact={true}>
            <Header title={title}/>
            <UserScreen colors={colors} showError={updateErrorMessage} updateTitle={updateTitle}/>
          </Route>
        </Switch>
        <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
