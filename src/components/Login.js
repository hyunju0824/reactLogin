import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { joinMemberState, loginState } from '../recoil/atoms/atom';
import { useRecoilValue } from 'recoil';


export default function Login() {

  // useSetRecoilState : 컴포넌트가 상태를 읽지 않고 쓰기만 할 때 사용.
  const setLoginState = useSetRecoilState(loginState);
  // 회원 정보 불러오기
  const users = useRecoilValue(joinMemberState);
  // 로그인 성공 시 페이지 이동
  const navigate = useNavigate();
  // 비밀번호 Show / Hide 버튼
  const [showPassword, setShowPassword] = React.useState(false);

  console.log(users);

  // 로그인 유지..

  const handleLogin = (event) => {

    console.log(users);

    event.preventDefault();

    const { email, password } = event.target.elements;

    // 불러온 유저 정보와 일치하는지 확인
      let user = users.find(user => user.email === email.value && user.password === password.value);

    if (user) {
      setLoginState(user);
      console.log('로그인성공');
      navigate('/');
    } else {
      alert('이메일 또는 비밀번호가 잘못되었습니다.');
      console.log('로그인실패');
    }
  };


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleLogin} className="space-y-6">
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
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <Link className="font-semibold text-indigo-600 hover:text-indigo-500" to={`/findpassword`}>
                    비밀번호 찾기
                  </Link>
                </div>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute inset-y-0 right-0 transform pr-3 flex items-center text-xs leading-5'
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
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
