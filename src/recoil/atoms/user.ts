import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userState = atom({
    key: 'userState',
    default: {
        id: 1,
        email: '',
        nickname: '',
        profile_image: '',
    },
    effects_UNSTABLE: [persistAtom],
});
