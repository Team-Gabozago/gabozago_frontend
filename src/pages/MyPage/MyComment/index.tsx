import { useState } from 'react';
import { useLongPress } from 'use-long-press';

import * as S from './MyComment.style';

import GlobalModal from '@/components/GlobalModal';
import ModalContent from '@/components/ModalContent';
import Header from '@/components/MyPage/Header';

const MyCommentPage = () => {
    const [isModal, setIsModal] = useState(false);
    const posts = [
        {
            id: 1,
            title: '배드민턴/1명/여자/원투공원/저녁10시까지',
            content: 'content',
            time: '11.03',
        },
        {
            id: 2,
            title: '같이 배드민턴 쳐요!',
            content: 'content',
            time: '10.14',
        },
        {
            id: 3,
            title: '모닝 배드민턴 쳐요^^',
            content: 'content',
            time: '08.25',
        },
    ];

    const bind = useLongPress(() => {
        setIsModal(true);
    });

    return (
        <>
            <S.MyCommentPage {...bind()}>
                <Header title="내가 쓴 댓글/답글" />
                <S.MyCommentContent>
                    <S.SubTitle>길게 눌러 삭제</S.SubTitle>
                    {posts.map(post => (
                        <S.PostContainer key={`comment-${post.id}`}>
                            <S.Time>{post.time}</S.Time>
                            <S.Title>{post.title}</S.Title>
                            <S.Divider />
                            <S.Content>{post.content}</S.Content>
                        </S.PostContainer>
                    ))}
                </S.MyCommentContent>
                <S.EndPointWrapper>
                    <S.EndPoint />
                </S.EndPointWrapper>
            </S.MyCommentPage>
            {isModal && (
                <GlobalModal
                    size="small"
                    handleCancelClick={() => setIsModal(false)}
                >
                    <ModalContent
                        title="내 답글을 삭제하시겠어요?"
                        description="삭제한 답글은 되돌릴 수 없어요."
                        buttonText="삭제"
                        handleButtonClick={() => setIsModal(false)}
                    />
                </GlobalModal>
            )}
        </>
    );
};

export default MyCommentPage;
