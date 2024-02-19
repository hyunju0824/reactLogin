import { useNavigate } from "react-router-dom";
import { joinMemberState, loginState } from "../recoil/atoms/atom";
import { useRecoilValue } from "recoil";

export default function FindPassword() {

    // 회원 정보 불러오기
    const users = useRecoilValue(joinMemberState);

    // 알림창 확인 클릭시 로그인 페이지로 이동
    const navigate = useNavigate();

    const handleFindPassword = (event) => {
        event.preventDefault();

        const { email } = event.target.elements;
        
        let user = users.find(user => user.email === email.value);
        if (user) {
            alert(`고객님의 비밀번호는 ${user.password} 입니다.
확인을 누르면 로그인 페이지로 이동합니다.`);
            navigate('/login');
        } else {
            alert(`해당 이메일로 가입된 계정이 존재하지 않습니다.`);
        }
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
            <form onSubmit={handleFindPassword} className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                            회원가입 시 입력한 이메일을 작성해주세요.
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        비밀번호 찾기
                    </button>
                </div>
            </form>
        </div>
    )
};