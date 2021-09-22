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
import UserGreetings from './components/UserGreetings';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import LifecycleUpdate from './components/LifecycleUpdate';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Table />
      {/* <FragmentDemo /> */}
      {/* <LifecycleUpdate /> */}
      {/* <LifeCycleA /> */}
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <StyleSheet primary ={true}/> */}
      {/* <NameList /> */}
      {/* <UserGreetings /> */}
      {/* <ParentComponent /> */}
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
