import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import * as S from './Like.style';

import { getFeeds } from '@/apis/feeds'
import { getMyPage } from '@/apis/mypage';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Navigation from '@/components/common/Navigation';
import GlobalModal from '@/components/GlobalModal';
import LikeSportModal from '@/components/MyPage/LikeSport/LikeSportModal';
import Post from '@/components/Post';
import { Feed } from '@/interfaces/feed';

const LikePage = () => {
    const [clickedSport, setClickedSport] = useState({ idx: 0, name: '' });
    const [clickedValue, setClickedValue] = useState('NEWEST');

    const [isSportModal, setIsSportModal] = useState(false);
    const { data: me, refetch: refetchMyPage } = useQuery(
        ['myPage'],
        getMyPage
    );

    const { data: feeds, refetch: refetchFeeds } = useQuery(['feeds'], () => getFeeds(clickedSport.name, clickedValue));

    const handlePlusClick = () => {
        setIsSportModal(true);
    };

    const handleNaviLi = (value: string) => {
        setClickedValue(value);
    }

    console.log(feeds);

    return (
        <S.LikePage>
            <S.Contents>
                <Header />
                {me && me.categories.length > 0 ?
                    <>
                        <S.Title>관심 운동의<br /> 새 제안이에요.</S.Title>
                        <S.SportWrapper>
                            {me.categories.map((category: { id: number, name: string, favorite: boolean }, idx: number) =>
                                <S.SportButton clicked={idx === clickedSport.idx} key={category.id} onClick={() => setClickedSport({ idx, name: category.name })}
                                >
                                    {category.name}
                                </S.SportButton>)}
                            <S.PlusSportButton onClick={handlePlusClick}>
                                +
                            </S.PlusSportButton>
                        </S.SportWrapper>
                        <Navigation clickedValue={clickedValue} handleNaviLi={handleNaviLi} />
                        {feeds && feeds.length > 0 && feeds.map((feed: Feed) => <Post post={feed} />)}
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