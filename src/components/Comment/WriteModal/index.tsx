import { useRef } from 'react';
import { useClickAway } from 'react-use';
import { useSetRecoilState } from 'recoil';

import WriteComment from '../WriteComment';

import * as S from './writeModal.style';

import { commentOpenAtom } from '@/recoil/atoms/comment';

const WriteModal = () => {
    const setCommentOpen = useSetRecoilState(commentOpenAtom);
    const ref = useRef(null);
    useClickAway(ref, () => {
        setCommentOpen(false);
    });
    return (
        <S.Container>
            <div ref={ref}>
                <WriteComment ninkName="냠냠" />
            </div>
        </S.Container>
    );
};

export default WriteModal;
