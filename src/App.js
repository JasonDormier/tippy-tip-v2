import React, { useState } from 'react';
import Header from './components/Header/Header';
import Card from './components/UI/Card/Card';
import UserInput from './components/UserInput/UserInput';
import Output from './components/Output/Output';

import classes from './App.module.css';


const App = () => {

  const [inputData, setInputData] = useState({})

  const onInputDataHandler = (inputData) => {
    setInputData(() =>{
      return {inputData};
    });
    console.log('App input data: ', inputData);
  }
  return (
    <>
      <Header />
      <Card className={classes.layout}>
        <UserInput onInputData={onInputDataHandler}/>
        <Output passInputData={inputData}/>
      </Card>
    </>
  );
}

export default App;
