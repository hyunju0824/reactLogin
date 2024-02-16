import { atom } from "recoil";

// 로컬 저장
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();


// 로그인
export const loginState = atom ({
    key: 'loginState',
    default: null,
    effects_UNSTABLE: [persistAtom],
});

// 회원가입
export const joinMemberState = atom({
    key: 'joinMemberState',
    default: [],
    effects_UNSTABLE: [persistAtom],
});