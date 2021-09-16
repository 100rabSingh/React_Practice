import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FuntionClick from './components/FuntionClick';
import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent />
      {/* <FuntionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name="Tony Stark" heroName="Iron Man">
        <p>This is Children Props</p></Greet>
      <Greet name="Steve" heroName="Captain America">
        <p>This is Children Props</p>
      </Greet>
      <Greet name="Natasha" heroName="Black Widows">
        <p>This is Children Props</p>
      </Greet> */}
      {/* <Welcome name="Tony Stark" heroName="Iron Man"/>
      <Welcome name="Steve" heroName="Captain America"/>
      <Welcome name="Natasha" heroName="Black Widows"/> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
