import React from 'react';
import Card from './components/UI/Card';
import UserInput from './components/UserInput/UserInput'
import Output from './components/Output/Output'

import './App.css';

const App = () => {
  return (
    <Card>
      <UserInput/>
      <Output/>
    </Card>

  );
}

export default App;
