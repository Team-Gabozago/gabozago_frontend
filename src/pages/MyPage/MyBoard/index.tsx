import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useLongPress } from 'use-long-press';

import * as S from './MyBoard.style';

import { getMyBoardPage } from '@/apis/mypage';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import GlobalModal from '@/components/GlobalModal';
import ModalContent from '@/components/ModalContent';
import Header from '@/components/MyPage/Header';
import Post from '@/components/Post';
import { IPost } from '@/types/post';

const MyBoardPage = () => {
    const [isModal, setIsModal] = useState(false);
    const { data: feeds } = useQuery(
        ['myPage'],
        getMyBoardPage
    );

    const bind = useLongPress(() => {
        setIsModal(true);
    });

    return (
        <>
            <S.MyLikePage {...bind()}>
                <Header title="내가 쓴 게시글" />
                <S.MyLikeContent>
                    <S.SubTitle>길게 눌러 삭제</S.SubTitle>
                    {feeds && feeds.length > 0 ? feeds.map((post: IPost) => (
                        <Post post={post} />
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
                        title="게시글을 삭제하시겠어요?"
                        description="삭제한 게시글은 되돌릴 수 없어요."
                        buttonText="삭제"
                        handleButtonClick={() => setIsModal(false)}
                    />
                </GlobalModal>
            )}
        </>
    );
};

export default MyBoardPage;
