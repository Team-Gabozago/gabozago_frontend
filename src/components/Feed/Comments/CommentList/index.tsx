import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Comment from '../Comment';

import { deleteComment, patchComment } from '@/apis/comments';
import GlobalModal from '@/components/GlobalModal';
import ModalContent from '@/components/ModalContent';
import { CommentType } from '@/types/comment';

interface CommentListProps {
    allComments: CommentType[];
    refetchComments: () => void;
}

const CommentList = ({ allComments, refetchComments }: CommentListProps) => {
    const { id } = useParams();
    const [isModal, setIsModal] = useState(false);
    const [modalText, setModalText] = useState({
        title: '',
        description: '',
        handleButtonClick: () => true,
    });

    const fetchDeleteComment = useMutation(deleteComment, {
        onSuccess: async (ok: boolean) => {
            if (ok) {
                setModalText({
                    title: '정상적으로 삭제되었습니다.',
                    description: '댓글 삭제 완료',
                    handleButtonClick: () => {
                        refetchComments();
                        setIsModal(false);
                        return true;
                    },
                });
                setIsModal(true);
            }
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const fetchPatchComment = useMutation(patchComment, {
        onSuccess: async (ok: boolean) => {
            if (ok) {
                setModalText({
                    title: '정상적으로 수정되었습니다.',
                    description: '댓글 수정 완료',
                    handleButtonClick: () => {
                        refetchComments();
                        setIsModal(false);
                        return true;
                    },
                });
                setIsModal(true);
            }
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const handlePutComment = (commentId: number, content: string) =>
        fetchPatchComment.mutate({ id, commentId, content });

    const handleDeleteComment = (commentId: number) => {
        setModalText({
            title: '댓글을 삭제하시겠습니까 ?',
            description: '댓글을 삭제하면 복구할 수 없습니다.',
            handleButtonClick: () =>
                fetchDeleteComment.mutate({ id, commentId }),
        });
        setIsModal(true);
    };

    return (
        <section className="h-full flex flex-col">
            {allComments &&
                allComments.map((comment: CommentType) => (
                    <>
                        <Comment
                            key={`comment-${comment.id}`}
                            comment={comment}
                            handlePutComment={handlePutComment}
                            handleDeleteComment={handleDeleteComment}
                            refetchComments={refetchComments}
                        />
                        {comment.replies.length > 0 &&
                            comment.replies.map((replyComment: CommentType) => (
                                <Comment
                                    key={`replyComment-${replyComment.id}`}
                                    comment={replyComment}
                                    handlePutComment={handlePutComment}
                                    handleDeleteComment={handleDeleteComment}
                                    refetchComments={refetchComments}
                                />
                            ))}
                    </>
                ))}
            {isModal && (
                <GlobalModal
                    size="small"
                    handleCancelClick={() => setIsModal(false)}
                >
                    <ModalContent
                        title={modalText.title}
                        description={modalText.description}
                        buttonText="확인"
                        handleButtonClick={modalText.handleButtonClick}
                    />
                </GlobalModal>
            )}
        </section>
    );
};

export default CommentList;
