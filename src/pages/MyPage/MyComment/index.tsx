import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useLongPress } from 'use-long-press';

import * as S from './MyComment.style';

import { getMyCommentPage } from '@/apis/mypage';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import GlobalModal from '@/components/GlobalModal';
import ModalContent from '@/components/ModalContent';
import Header from '@/components/MyPage/Header';
import { IComment } from '@/types/post';

const MyCommentPage = () => {
    const [isModal, setIsModal] = useState(false);
    const { data: comments } = useQuery(
        ['myPage'],
        getMyCommentPage
    );

    const bind = useLongPress(() => {
        setIsModal(true);
    });

    return (
        <>
            <S.MyCommentPage {...bind()}>
                <Header title="내가 쓴 댓글/답글" />
                <S.MyCommentContent>
                    <S.SubTitle>길게 눌러 삭제</S.SubTitle>
                    {comments && comments.length > 0 ? comments.map((comment: IComment) => (
                        <S.PostContainer key={`comment-${comment.id}`}>
                            <S.Time>{comment.time}</S.Time>
                            <S.Title>{comment.title}</S.Title>
                            <S.Divider />
                            <S.Content>{comment.content}</S.Content>
                        </S.PostContainer>
                    )) : <LoadingSpinner size="large" />}
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
