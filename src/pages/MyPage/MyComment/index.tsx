import { useQuery, useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useLongPress } from 'use-long-press';

import * as S from './MyComment.style';

import { deleteComment } from '@/apis/comments';
import { getMyCommentPage } from '@/apis/mypage';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import GlobalModal from '@/components/GlobalModal';
import ModalContent from '@/components/ModalContent';
import Header from '@/components/MyPage/Header';
import { CommentType } from '@/types/comment';
import { calculateDate } from '@/utils/date';

const MyCommentPage = () => {
    const [modalData, setModalData] = useState({
        feedId: 0,
        commentId: 0,
        isOpen: false,
        title: '',
        description: '',
        handleButtonClick: () => true,
    });
    const { data: comments, refetch: refetchMyComments } = useQuery(
        ['myPage'],
        getMyCommentPage
    );

    const fetchDeleteComment = useMutation(deleteComment, {
        onSuccess: async (ok: boolean) => {
            if (ok) {
                setModalData({
                    feedId: 0,
                    commentId: 0,
                    isOpen: true,
                    title: '정상적으로 삭제되었습니다.',
                    description: '댓글 삭제 완료',
                    handleButtonClick: () => {
                        refetchMyComments();
                        return true;
                    },
                });
            }
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const bind = useLongPress(() => {
        // feedId, commentId 어떻게 받지?
        setModalData({
            feedId: 0,
            commentId: 0,
            isOpen: true,
            title: '서비스 준비중입니다...',
            description: '삭제한 답글은 되돌릴 수 없어요.',
            // handleButtonClick: () => fetchDeleteComment.mutate({ feedId: modalData.feedId, commentId: modalData.commentId })
            handleButtonClick: () => {
                setModalData({ ...modalData, isOpen: false });
                return true;
            },
        });
    });

    return (
        <>
            <S.MyCommentPage>
                <Header title="내가 쓴 댓글/답글" />
                <S.MyCommentContent>
                    <S.SubTitle>길게 눌러 삭제</S.SubTitle>
                    {comments && comments.length > 0 ? (
                        comments.map((comment: CommentType) => (
                            <S.PostContainer
                                key={`comment-${comment.id}`}
                                {...bind()}
                            >
                                <S.Time>
                                    {calculateDate(comment.updated_at)}
                                </S.Time>
                                <S.Divider />
                                <S.Content>{comment.content}</S.Content>
                            </S.PostContainer>
                        ))
                    ) : (
                        <LoadingSpinner size="large" />
                    )}
                </S.MyCommentContent>
                <S.EndPointWrapper>
                    <S.EndPoint />
                </S.EndPointWrapper>
            </S.MyCommentPage>
            {modalData.isOpen && (
                <GlobalModal
                    size="small"
                    handleCancelClick={() =>
                        setModalData({ ...modalData, isOpen: false })
                    }
                >
                    <ModalContent
                        title={modalData.title}
                        description={modalData.description}
                        buttonText="삭제"
                        handleButtonClick={modalData.handleButtonClick}
                    />
                </GlobalModal>
            )}
        </>
    );
};

export default MyCommentPage;
