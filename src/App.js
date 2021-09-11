import React, { useState } from 'react';
import Header from './components/Header/Header';
import Card from './components/UI/Card/Card';
import UserInput from './components/UserInput/UserInput';
import Output from './components/Output/Output';
import ReactGA from 'react-ga';

import classes from './App.module.css';

//figure out how to handle the key board pop up on the phone.
const TRACKING_ID = "G-1DJNQFET53"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const App = () => {

  const [bill, setBill] = useState({value: ''});
  const [tip, setTip] = useState({value: .1});
  const [people, setPeople] = useState({value: 1});

  const billHandler = billInput => {
    setBill(billInput)
  }
  
  const tipHandler = tipInput => {
    setTip(tipInput)
  }

  const peopleHandler = peopleInput => {
    setPeople(peopleInput)
  }


  const resetHandler = event => {
    event.preventDefault();
    setBill({value: ''});
    setPeople({value: 1});
    setTip({value: .1});
  };

  return (
    <>
      <Header />
      <Card className={classes.layout}>
        <UserInput
          inputBill={billHandler}
          inputPeople={peopleHandler}
          inputTip={tipHandler}
          passBill={bill}
          passTip={tip}
          passPeople={people}
        />
        <Output
          passBill={bill}
          passTip={tip}
          passPeople={people}
          reset={resetHandler}
        />
      </Card>
    </>
  );
};

export default App;
