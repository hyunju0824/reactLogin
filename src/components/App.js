import { React, useState } from 'react';
import '../App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Login from './Login';
import Home from './Home';
import JoinMember from './JoinMember';

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/joinmember' element={<JoinMember />} />
        </Routes>
    </div>
  );
}

export default App;
