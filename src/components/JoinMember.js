import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { joinMemberState } from '../recoil/atoms/atom';
import { useNavigate } from 'react-router-dom';

function JoinMember() {
    //컴포넌트 전역에서 사용 = useRecoilState
    const [user, setUser] = useRecoilState(joinMemberState);

    // 유효성 검사
    // 이 컴포넌트에서만 사용하는 상태 = useState / ('') <- 초기 상태값
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    // 프로필 이미지
    const [previewImage, setPreviewImage] = useState(null);

    // 회원가입 완료 시 페이지 이동
    const navigate = useNavigate();

    // 이메일 중복 검사
    const emailDuplication = (event) => {
        setEmail(event.target.value);

        // 기존 데이터 읽어오기
        let users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.find(user => user.email === event.target.value)) {
            setEmailError('이미 사용중인 이메일입니다.');
        } else {
            setEmailError('');
        }
    };

    // 비밀번호  검사 
    const passwordValidity = (event) => {
        setPassword(event.target.value);
        let passwordRegex = /^(?=.*[a-zA-Z])(?=.*[가-힣]).{8,}$/

        // test : 정규식 검사 메서드
        if (!passwordRegex.test(event.target.value)) {
            setPasswordError('비밀번호 요구사항이 충족되지 않았습니다.');
        } else {
            setPasswordError('');
        }
    };

    // 비밀번호 Show / Hide 버튼
    const [showPassword, setShowPassword] = React.useState(false);

    // 프로필 이미지
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setPreviewImage(reader.result);
            // 이게 없으면 다른 컴포넌트에서 사용할 수 없다.
            setUser(reader.result);
        };

        reader.readAsDataURL(file);
    }

    // 
    const handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = event.target.elements;

        if (emailError || passwordError) {
            alert('입력한 정보를 다시 확인해주세요.');
            return;
        }

        // 기존 데이터 읽어오기
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // 새로운 데이터 추가
        users.push({
            email: email.value,
            password: password.value,
            profileImage: previewImage,
        });
        // 로컬 스토리지 저장
        localStorage.setItem('users', JSON.stringify(users));
        // recoil 상태 업로드
        setUser(users);

        navigate('/joincomplete');

    };

    return (
        <div className="isolate bg-white px-6 py-12 lg:px-8">
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem] pointer-events-none"
                aria-hidden="true"
            >
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                required
                                //이메일 중복 검사
                                value={email}
                                onChange={emailDuplication}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {emailError && <span className='error text-sm text-red-500'>{emailError}</span>}
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="mt-2.5 relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                autoComplete="organization"
                                required
                                value={password}
                                onChange={passwordValidity}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 transform -translate-y-7 pr-3 flex items-center text-xs leading-5">
                                {showPassword ? "Hide" : "Show"}
                            </button>
                            {passwordError && <span className='error text-sm text-red-500'>{passwordError}</span>}
                            <div className='text-xs text-gray-600'>
                                <ul>
                                    <li>
                                        * 한글과 영어를 사용해야합니다.
                                    </li>
                                    <li>
                                        * 8글자 이상으로 설정해야 합니다.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="profileImage" className="block text-sm font-semibold leading-6 text-gray-900">
                            프로필 사진
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="file"
                                accept="image/*"
                                name="profileImage"
                                id="profileImage"
                                onChange={handleImageUpload}
                                required
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {/* 프로필 사진 미리보기 */}
                            {previewImage ? (
                                <img
                                    className="mt-7 inline-block h-14 w-14 rounded-full"
                                    src={previewImage}
                                    alt=""
                                />
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        회원가입
                    </button>
                </div>
            </form>
        </div>
    )
}

export default JoinMember;
