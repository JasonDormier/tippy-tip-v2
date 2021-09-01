import React from 'react';
import Header from './components/Header/Header';
import Card from './components/UI/Card/Card';
import UserInput from './components/UserInput/UserInput';
import Output from './components/Output/Output';

import classes from './App.module.css';


const App = () => {
  return (
    <>
      <Header />
      <Card className={classes.layout}>
        <UserInput />
        <Output />
      </Card>
    </>
  );
}

export default App;
