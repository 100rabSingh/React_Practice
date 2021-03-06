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
import PureComp from './components/PureComp';
import RegComp from './components/RegComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider value='100rab'>
        <ComponentC />
      </UserProvider>
      {/* <CounterTwo
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />

      <CounterTwo
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}

      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? '100rab' : 'Guest'} /> */}

      {/* <HoverCounter />

      <ClickCounter name='100rab' /> */}

      {/* <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Superman"></Hero>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
      </ErrorBoundary> */}
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Table /> */}
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
      {/* <Message /> */}
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
