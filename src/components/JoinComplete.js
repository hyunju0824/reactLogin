import { Link } from "react-router-dom";

export default function JoinComplete() {
    return (
        <div>
            <div className="bg-white">
                <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            회원가입이 완료되었습니다.
                            <br />
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                            Sign up is complete !
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link to={`/login`}>
                                <button
                                    type="button"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    로그인 페이지로 이동 →
                                </button>

                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}