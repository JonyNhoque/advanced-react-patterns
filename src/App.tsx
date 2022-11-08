import React from 'react';
import './App.css';
import { ButtonRouter } from './components/button';


function App() {
  return (
    <div className="app__container">
      <div id='app__box'>
        <div id='app__header'>
          <h2>React Exercises and Small Projects</h2>
        </div>
        <div id='app__body'>
          <ButtonRouter route='./basics' routeName='Basics'/>
          <ButtonRouter route='./covid-tracker' routeName='Covid Tracker' />
          <ButtonRouter route='./to-do-list' routeName='To Do App { CRUD }'/>
        </div>
      </div>
    </div>
  );
}

export default App;
