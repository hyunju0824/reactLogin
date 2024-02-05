import React from 'react';
import '../App.css';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Login from './Login';
import JoinMember from './JoinMember';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/joinmember' element={<JoinMember/>} />
        </Routes>
      </RecoilRoot>
    </div>
  );
}

export default App;
