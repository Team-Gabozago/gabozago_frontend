import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import FeedProfile from '../../Profile';
import CreateComment from '../CreateComment';

import I from '@/components/common/Icons';
import { userState } from '@/recoil/atoms/user';
import theme from '@/styles/theme';
import { CommentType } from '@/types/comment';

interface CommentProps {
    comment: CommentType;
    handlePutComment: (commentId: number, content: string) => void;
    handleDeleteComment: (commentId: number) => void;
    refetchComments: () => void;
}

const Comment = ({
    comment,
    handlePutComment,
    handleDeleteComment,
    refetchComments,
}: CommentProps) => {
    const user = useRecoilValue(userState);
    const [isOpenCreate, setIsOpenCreate] = useState(false);
    const [isPatch, setIsPatch] = useState(false);

    return (
        <>
            <div
                className={`w-[23.4375rem] p-6 border-b border-solid 
            ${
                comment.comment_id
                    ? 'h-28 border-gray bg-silver'
                    : 'h-32 border-silver bg-white'
            }`}
            >
                <div className="flex justify-between">
                    <FeedProfile
                        author={comment.author}
                        updated_at={comment.updated_at}
                    />
                    {user.id === comment.author.id && (
                        <div className="flex items-start gap-4">
                            <button
                                type="button"
                                className="text-xs text-label"
                                onClick={() => {
                                    setIsPatch(true);
                                    setIsOpenCreate(true);
                                }}
                            >
                                수정
                            </button>
                            <button
                                type="button"
                                className="text-xs text-label"
                                onClick={() => handleDeleteComment(comment.id)}
                            >
                                삭제
                            </button>
                        </div>
                    )}
                </div>
                <div className="py-3">
                    <article className="flex flex-col gap-3 px-2">
                        <div>{comment.content}</div>
                        {!comment.comment_id && (
                            <div className="flex items-center gap-2 text-xs text-gray">
                                <I.ReplyComment color={theme.color.gray} />
                                <button
                                    type="button"
                                    className="cursor-pointer"
                                    onClick={() => setIsOpenCreate(true)}
                                >
                                    답글달기
                                </button>
                                <span>{comment.replies.length}개</span>
                            </div>
                        )}
                    </article>
                </div>
            </div>
            {isOpenCreate && (
                <CreateComment
                    commentId={comment.id}
                    commentContent={isPatch ? comment.content : ''}
                    refetchComments={refetchComments}
                    isPatch={isPatch}
                    handlePutComment={handlePutComment}
                    handleCancelClick={() => {
                        setIsOpenCreate(false);
                        setIsPatch(false);
                    }}
                />
            )}
        </>
    );
};

export default Comment;
