import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import * as S from './Like.style';

import { getMyPage } from '@/apis/mypage';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import GlobalModal from '@/components/GlobalModal';
import LikeSportModal from '@/components/MyPage/LikeSport/LikeSportModal';

const LikePage = () => {
    const [clickedSport, setClickedSport] = useState(1);
    const [isSportModal, setIsSportModal] = useState(false);
    const { data: me, refetch: refetchMyPage } = useQuery(
        ['myPage'],
        getMyPage
    );
    const handlePlusClick = () => {
        setIsSportModal(true);
    };

    return (
        <S.LikePage>
            <Header />
            <S.Contents>
                {me && me.categories.length > 0 ?
                    <>
                        <S.Title>관심 운동의<br /> 새 제안이에요.</S.Title>
                        <S.SportWrapper>
                            {me.categories.map((category: { id: number, name: string, favorite: boolean }, idx) =>
                                <S.SportButton clicked={idx === clickedSport} key={category.id} onClick={() => setClickedSport(idx)}
                                >
                                    {category.name}
                                </S.SportButton>)}
                            <S.PlusSportButton onClick={handlePlusClick}>
                                +
                            </S.PlusSportButton>
                        </S.SportWrapper>
                    </>
                    : <S.NoLikeContent>
                        <S.NoLikeText>
                            아직 등록된 관심 운동이 없어요.<br />
                            좋아하는 운동 종목을 설정해보세요.
                        </S.NoLikeText>
                        <S.LikeAddButton onClick={handlePlusClick}>
                            관심운동 추가
                        </S.LikeAddButton>
                    </S.NoLikeContent>
                }
            </S.Contents>
            <Footer />
            {
                isSportModal && (
                    <GlobalModal
                        size="medium"
                        handleCancelClick={() => setIsSportModal(false)}
                    >
                        <LikeSportModal
                            likeSports={me.categories}
                            handleCancelModal={() => setIsSportModal(false)}
                            refetchMyPage={refetchMyPage}
                        />
                    </GlobalModal>
                )
            }
        </S.LikePage >
    );
}

export default LikePage;