import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import FeedProfile from '../Profile';

import * as S from './CommentList.style';

import { deleteComment } from '@/apis/comments';
import GlobalModal from '@/components/GlobalModal';
import ModalContent from '@/components/ModalContent';
import { Comment } from '@/interfaces/comment';
import { userState } from '@/recoil/atoms/user';

interface CommentListProps {
    feedId: number;
    comments: Comment[];
    refetchComments: () => void;
}

const CommentList = ({
    feedId,
    comments,
    refetchComments,
}: CommentListProps) => {
    const user = useRecoilValue(userState);
    const [isModal, setIsModal] = useState(false);
    const [modalText, setModalText] = useState({
        title: '',
        description: '',
        handleButtonClick: () => any,
    });

    const fetchDeleteComment = useMutation(deleteComment, {
        onSuccess: async (ok: boolean) => {
            if (ok) {
                setModalText({
                    title: '정상적으로 삭제되었습니다.',
                    description: '댓글 삭제 완료',
                    handleButtonClick: () => {
                        refetchComments();
                    },
                });
                setIsModal(true);
            }
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const handlePutComment = (commentId: number) => {
        // setModalText({
        //     title: '서비스 준비중입니다.',
        //     description: '댓글 수정 기능 준비중',
        // });
        // setIsModal(true);
    };

    const handleDeleteComment = (commentId: number) => {
        setModalText({
            title: '댓글을 삭제하시겠습니까 ?',
            description: '댓글을 삭제하면 복구할 수 없습니다.',
            handleButtonClick: () =>
                fetchDeleteComment.mutate({ feedId, commentId }),
        });
        setIsModal(true);
    };

    return (
        <S.CommentList>
            {comments &&
                comments.map((comment: Comment) => (
                    <S.Comment key={`comment-${comment.id}`}>
                        <S.Header>
                            <FeedProfile
                                author={comment.author}
                                updatedAt={comment.updated_at}
                            />
                            {user.id === comment.author.id && (
                                <>
                                    <S.ButtonWrapper>
                                        <S.Button
                                            onClick={() =>
                                                handlePutComment(comment.id)
                                            }
                                        >
                                            수정
                                        </S.Button>
                                        <S.Button
                                            onClick={() =>
                                                handleDeleteComment(comment.id)
                                            }
                                        >
                                            삭제
                                        </S.Button>
                                    </S.ButtonWrapper>
                                    {isModal && (
                                        <GlobalModal
                                            size="small"
                                            handleCancelClick={() =>
                                                setIsModal(false)
                                            }
                                        >
                                            <ModalContent
                                                title={modalText.title}
                                                description={
                                                    modalText.description
                                                }
                                                buttonText="확인"
                                                handleButtonClick={
                                                    modalText.handleButtonClick
                                                }
                                            />
                                        </GlobalModal>
                                    )}
                                </>
                            )}
                        </S.Header>
                        <S.Content>{comment.content}</S.Content>
                    </S.Comment>
                ))}
        </S.CommentList>
    );
};

export default CommentList;
