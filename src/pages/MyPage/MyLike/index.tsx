import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLongPress } from 'use-long-press';

import * as S from '../MyBoard/MyBoard.style';

import { getMyLikePage } from '@/apis/mypage';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import GlobalModal from '@/components/GlobalModal';
import ModalContent from '@/components/ModalContent';
import Header from '@/components/MyPage/Header';
import Post from '@/components/Post';
import { Feed } from '@/interfaces/feed';

const MyLikePage = () => {
    const [isModal, setIsModal] = useState(false);
    const { data: likes } = useQuery(
        ['myPage'],
        getMyLikePage
    );

    const bind = useLongPress(() => {
        setIsModal(true);
    });

    return (
        <>
            <S.MyLikePage {...bind()}>
                <Header title="관심 보낸 글" />
                <S.MyLikeContent>
                    <S.SubTitle>길게 눌러 관심 해제</S.SubTitle>
                    {likes && likes.length > 0 ? likes.map((feed: Feed) => (
                        <Link
                            to={`/feed/${feed.id}`}
                            key={`post-${feed.id}`}
                        >
                            <Post post={feed} />
                        </Link>
                    )) : <LoadingSpinner size="large" />}
                </S.MyLikeContent>
                <S.EndPointWrapper>
                    <S.EndPoint />
                </S.EndPointWrapper>
            </S.MyLikePage>
            {isModal && (
                <GlobalModal
                    size="small"
                    handleCancelClick={() => setIsModal(false)}
                >
                    <ModalContent
                        title="관심을 해제하시겠어요?"
                        description="관심 보낸 글 목록에서 다시 볼 수 없어요."
                        buttonText="해제"
                        handleButtonClick={() => setIsModal(false)}
                    />
                </GlobalModal>
            )}
        </>
    );
};

export default MyLikePage;
