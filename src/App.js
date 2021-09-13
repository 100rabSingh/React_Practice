import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name="Stark" heroName="Iron Man" />
      <Greet name="Steve" heroName="Captain America"/>
      <Greet name="Natasha" heroName="Black Widows"/>
      {/* <Welcome />
      <Hello /> */}
    </div>
  );
}

export default App;
