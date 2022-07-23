import MainPage from  './components/MainPage'
import SecondPage from './components/SecondPage'
import React, {Fragment} from 'react';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
    <Route  path="/" element = {<MainPage/>} />    
    <Route  path="/people" element= {<SecondPage/>} />   
   </Routes>
   </Router>
  );
}

export default App