import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Card from './components/UI/Card/Card';
import UserInput from './components/UserInput/UserInput';
import Output from './components/Output/Output';

import classes from './App.module.css';

const zero = (Math.round(0 * 100) / 100).toFixed(2);

const App = () => {

  // const [bill, setBill] = useState(zero);
  // const [people, setPeople] = useState(1);
  // const [tip, setTip] = useState(.1);

  const [data, setData] = useState({
    bill: zero,
    people: 1,
    tip: .1,
  });

  const dataHandler = (inputData) => {
    setData(() => {
      return inputData;
    });
  }
  const resetHandler = event => {
    event.preventDefault();
    console.log('this fired');
    setData({
      bill: (Math.round(0 * 100) / 100).toFixed(2),
      people: 1,
      tip: .1
    });
    return data;
  }

  useEffect(() => {
    console.log('Data inside App: ', data);
  }, [data])

  return (
    <>
      <Header />
      <Card className={classes.layout}>
        <UserInput
          inputData={dataHandler}
          passData={data}
          reset={resetHandler}
        />
        <Output
          passData={data}
          outPutData={dataHandler}
          reset={resetHandler}
        />
      </Card>
    </>
  );
}

export default App;
