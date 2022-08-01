import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ToDoList } from './pages/to-do-list/ToDoList';
import { Basics } from './pages/basics';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/to-do-list' element={<ToDoList/>} />
      <Route path='/basics' element={<Basics/>} />
    </Routes>
  </BrowserRouter>
);
