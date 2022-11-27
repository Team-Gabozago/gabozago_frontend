import { useState } from 'react';

import * as S from './LikeSport.style';
import LikeSportModal from './LikeSportModal';

import GlobalModal from '@/components/GlobalModal';
import { sports } from '@/constants/sports';

const LikeSport = () => {
    const [isSportModal, setIsSportModal] = useState(false);

    const handlePlusClick = () => {
        setIsSportModal(true);
    };

    return (
        <>
            <S.LikeSport>
                <S.Title>관심 운동</S.Title>
                <S.SportWrapper>
                    <S.Sport>배드민턴</S.Sport>
                    <S.Sport>줄넘기</S.Sport>
                    <S.Sport>러닝</S.Sport>
                    <S.PlusSportButton onClick={handlePlusClick}>
                        +
                    </S.PlusSportButton>
                </S.SportWrapper>
            </S.LikeSport>
            {isSportModal && (
                <GlobalModal
                    size="medium"
                    handleCancelClick={() => setIsSportModal(false)}
                >
                    <LikeSportModal
                        likeSports={sports}
                        handleCancelModal={() => setIsSportModal(false)}
                    />
                </GlobalModal>
            )}
        </>
    );
};

export default LikeSport;
