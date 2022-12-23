import { useQuery, useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useLongPress } from 'use-long-press';

import { deleteComment } from '@/apis/comments';
import { getMyCommentPage } from '@/apis/mypage';
import Blank from '@/components/Blank';
import I from '@/components/common/Icons';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import GlobalModal from '@/components/GlobalModal';
import ModalContent from '@/components/ModalContent';
import Header from '@/components/MyPage/Header';
import { MyCommentType } from '@/types/comment';
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
    const {
        data: comments,
        isLoading,
        refetch: refetchMyComments,
    } = useQuery(['myPage'], getMyCommentPage);

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

    if (isLoading) return <LoadingSpinner size="large" />;

    return (
        <>
            <section>
                <Header title="내가 쓴 댓글/답글" />
                <div className="flex flex-col items-center py-7">
                    <div className="flex justify-center items-center py-7 text-darkGray text-xs">
                        길게 눌러 삭제
                    </div>
                    {comments && comments.length > 0 ? (
                        comments.map((comment: MyCommentType) => (
                            <div
                                className="w-80 flex flex-col p-4 mb-3 rounded bg-white"
                                key={`comment-${comment.id}`}
                                {...bind()}
                            >
                                <p className="text-xs text-label mb-2">
                                    {calculateDate(comment.updated_at)}
                                </p>
                                <p className="text-xs text-label">
                                    {comment.feed_content}
                                </p>
                                <div className="h-[1px] my-3 bg-silver" />
                                {comment.parent_content && (
                                    <div className="text-xs text-label mb-2">
                                        {comment.parent_content}
                                    </div>
                                )}
                                <div className="text-xs text-black">
                                    {comment.content}
                                </div>
                            </div>
                        ))
                    ) : (
                        <Blank />
                    )}
                </div>
                <div className="w-full flex justify-center mt-[3.75rem]">
                    <div className="w-2 h-2 rounded-full bg-gray" />
                </div>
            </section>
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
