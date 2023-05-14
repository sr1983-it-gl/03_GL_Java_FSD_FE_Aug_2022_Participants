import React from 'react';
import './App.css';

import {Login} from "./components/Login"
import {Shopping} from "./components/Shopping"

import {Routes, Route} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path='/' element={<Login></Login>}></Route>        
        <Route path='/shopping' element={<Shopping></Shopping>}></Route>

      </Routes>

    </div>
  );
}

export default App;
