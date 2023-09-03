import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Help from './pages/Help';
import Home from './pages/Home';
import How from './pages/How';
import Shop from './pages/Shop';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route exact path='/how' element={<How />}></Route>
        <Route exact path='/shop' element={<Shop />}></Route>
        <Route exact path='/help' element={<Help />}></Route>


      </Routes>
    </Router >
  );
}

export default App;
