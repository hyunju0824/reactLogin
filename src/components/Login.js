import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import { loginState } from '../recoil/atoms/atom'
import { atom, useRecoilState } from 'recoil'
import axios from 'axios'

export default function Login() {

  const [loggedIn, setLoggedIn] = useRecoilState(loginState);
  const navigate = useNavigate();

  const token = window.location.href.split('?token=')[1];
  useEffect(() => {
    // setItem : 로컬 저장
    // getItem : 저장된 데이터 값 불러옴 
    if (token) localStorage.setItem('4242-token', token);
    if (localStorage.getItem('4242-token')) setLoggedIn(true); 
  }, []);

  async function handleSubmit(e) {
    // e.preventDefault() : submit 새로고침을 막는다.
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });

      const { token } = response.data;
      localStorage.setItem('4242-token', token);
      setLoggedIn(true);
      navigate ('/');
    } catch (error) {
      console.log('에러에용');
    }
  }


    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        비밀번호 찾기
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                로그인
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              회원이 아니신가요?{' '}
              <li className="inline font-semibold leading-6 text-indigo-600 hover:text-indigo-500"><Link to={`/joinmember`}>회원가입</Link></li>
            </p>
          </div>
        </div>
      </>
    )
  }
  