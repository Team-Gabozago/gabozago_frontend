import { atom } from 'recoil';

export const commentOpenAtom = atom<boolean>({
    key: 'commentOpen',
    default: false,
});
