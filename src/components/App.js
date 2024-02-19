import { React } from 'react';
import '../App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import JoinMember from './JoinMember';
import JoinComplete from './JoinComplete';
import FindPassword from './FindPassword';

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/joinmember' element={<JoinMember />} />
          {/* 회원가입 완료 */}
          <Route path='/joincomplete' element={<JoinComplete/>} />
          {/* 비밀번호 찾기 */}
          <Route path='/findpassword' element={<FindPassword/>} />
        </Routes>
    </div>
  );
}

export default App;
