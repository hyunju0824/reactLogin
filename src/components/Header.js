// 헤더
import { React, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { loginState } from '../recoil/atoms/atom';

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

function Header() {

    // 로그인완료시 email 주소 띄우기
    const userInfo = useRecoilValue(loginState);
    console.log(userInfo?.email);

    // 반응형 메뉴 클릭하면 이동
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const closeMenu = () => {
        setMobileMenuOpen(false);
    }

    // sign out 
    const setLoginState = useSetRecoilState(loginState);
    // 로그아웃 함수
    const handleLogout = () => {
        setLoginState(null);
        console.log(userInfo);
    }

    return (
        <div className="App">
            {/* 헤더 */}
            <header className="bg-white">
                <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <div className="-m-1.5 p-1.5">
                            <Link to={`/`}>
                                <span className="sr-only">Your Company</span>
                                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-1 items-center justify-end gap-x-6">
                        {userInfo ? (
                            <span className='hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900'>
                                {/* 프로필 이미지 */}
                                <img
                                    className="inline-block h-10 w-10 rounded-full"
                                    src={userInfo.profileImage}
                                    alt=""
                                /> {userInfo.email}
                            </span>
                        ) : (
                            <Link className='hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900' to={`/joinmember`}>
                                Sign up
                            </Link>
                        )}

                        {/* 로그인상태라면 로그아웃버튼, 아니라면 로그인버튼 */}
                        {userInfo ? (
                            <button onClick={handleLogout}
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign out
                            </button>
                        ) : (
                            <Link to={`/login`}>
                                <button
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </Link>
                        )}
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center gap-x-6">
                            <div className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <Link to={`/`} onClick={closeMenu}>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            {/* Link 는 inline 이라서 감싸줘야 한다. */}
                            <div className="ml-auto">
                                {userInfo ? (
                                    // 한 개의 onClick 이벤트 핸들러에서 여러 함수 호출
                                    <button onClick={() => { closeMenu(); handleLogout(); }}
                                        className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Sign out
                                    </button>
                                ) : (
                                    <Link to="/login" onClick={closeMenu}>
                                        <button
                                            className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Sign in
                                        </button>
                                    </Link>
                                )}
                            </div>
                            <Link onClick={closeMenu}>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </Link>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    {userInfo ? (
                                        <></>
                                    ) : (
                                        <Link to="/joinmember" onClick={closeMenu}>
                                            <div
                                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                Sign up
                                            </div>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    );
}

export default Header;