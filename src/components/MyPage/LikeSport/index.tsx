import { useState } from 'react';

import * as S from './LikeSport.style';
import LikeSportModal from './LikeSportModal';

import GlobalModal from '@/components/GlobalModal';
import { LikeSportCategory } from '@/interfaces/sport';

interface LikeSportProps {
    categories: LikeSportCategory[];
    refetchMyPage: () => void;
}

const LikeSport = ({ categories, refetchMyPage }: LikeSportProps) => {
    const [isSportModal, setIsSportModal] = useState(false);
    const handlePlusClick = () => {
        setIsSportModal(true);
    };

    return (
        <>
            <S.LikeSport>
                <S.Title>관심 운동</S.Title>
                <S.SportWrapper>
                    {categories && categories.map(
                        (category: LikeSportCategory) =>
                            category.favorite && (
                                <S.Sport key={category.id}>
                                    {category.name}
                                </S.Sport>
                            )
                    )}
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
                        likeSports={categories}
                        handleCancelModal={() => setIsSportModal(false)}
                        refetchMyPage={refetchMyPage}
                    />
                </GlobalModal>
            )}
        </>
    );
};

export default LikeSport;
