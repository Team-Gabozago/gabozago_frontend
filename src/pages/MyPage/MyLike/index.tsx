import { useState } from 'react';
import { useLongPress } from 'use-long-press';

import * as S from '../MyBoard/MyBoard.style';

import GlobalModal from '@/components/GlobalModal';
import ModalContent from '@/components/ModalContent';
import Header from '@/components/MyPage/Header';
import Post from '@/components/Post';
import { IPost } from '@/types/post';

const MyLikePage = () => {
    const [isModal, setIsModal] = useState(false);
    const posts = [
        {
            title: '배드민턴/1명/여자/원투공원/저녁10시까지',
            content: 'content',
            writer: 'muffin',
            good: 3,
            comment: 5,
            time: '11.03',
            image: '',
        },
        {
            title: '같이 배드민턴 쳐요!',
            content: 'content',
            writer: 'muffin',
            good: 3,
            comment: 5,
            time: '10.14',
            image: '',
        },
        {
            title: '모닝 배드민턴 쳐요^^',
            content: 'content',
            writer: 'muffin',
            good: 3,
            comment: 5,
            time: '08.25',
            image: '',
        },
    ];

    const bind = useLongPress(() => {
        setIsModal(true);
    });

    return (
        <>
            <S.MyLikePage {...bind()}>
                <Header title="관심 보낸 글" />
                <S.MyLikeContent>
                    <S.SubTitle>길게 눌러 관심 해제</S.SubTitle>
                    {posts.map((post: IPost) => (
                        <Post post={post} />
                    ))}
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
