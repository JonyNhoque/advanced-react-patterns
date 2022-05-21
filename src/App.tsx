import React from 'react';
import './App.css';
import { Button } from './components/button';


function App() {
  return (
    <div className="app__container">
      <div id='app__box'>
        <div id='app__header'>
          <h2>Advanced React Patterns</h2>
        </div>
        <div id='app__body'>
          <Button route='./context-module' routeName='Context Module Functions'></Button>
          <Button route='#' routeName='Exercise #2'></Button>
          <Button route='#' routeName='Exercise #3'></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
