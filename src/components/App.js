import React from 'react';
import '../App.css';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Login></Login>} />
        </Routes>
      </RecoilRoot>
    </div>
  );
}

export default App;
