import { useState } from 'react';

import * as S from './LikeSport.style';
import LikeSportModal from './LikeSportModal';

import GlobalModal from '@/components/GlobalModal';
import { sports } from '@/constants/sports';
import { LikeSportCategory } from '@/interfaces/sport';

interface LikeSportProps {
    categories: LikeSportCategory[];
}

const LikeSport = ({ categories }: LikeSportProps) => {
    const [isSportModal, setIsSportModal] = useState(false);
    const handlePlusClick = () => {
        setIsSportModal(true);
    };

    return (
        <>
            <S.LikeSport>
                <S.Title>관심 운동</S.Title>
                <S.SportWrapper>
                    {categories.map((category: LikeSportCategory) => (
                        <S.Sport key={category.id}>{category.name}</S.Sport>
                    ))}
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
