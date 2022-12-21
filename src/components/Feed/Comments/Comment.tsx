import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import FeedProfile from '../Profile';

import CreateComment from './Create';
import CommentPatch from './PatchInput';

import I from '@/components/common/Icons';
import { userState } from '@/recoil/atoms/user';
import theme from '@/styles/theme';
import { AllCommentType, CommentType } from '@/types/comment';

interface CommentProps {
    comment: AllCommentType | CommentType;
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
    const [isPatch, setIsPatch] = useState(false);
    const [isOpenReply, setIsOpenReply] = useState(false);

    return (
        <div
            className={`w-80 py-6 border-b border-solid 
            ${comment.comment_id ? 'h-28' : 'h-32'}
            ${comment.comment_id ? 'border-gray' : 'border-silver'} 
            ${comment.comment_id ? 'bg-silver' : 'bg-white'}`}
        >
            <div className="flex justify-between items-center">
                <FeedProfile
                    author={comment.author}
                    updated_at={comment.updated_at}
                />
                {user.id === comment.author.id && (
                    <div className="flex gap-4">
                        <button
                            type="button"
                            className="text-xs text-label"
                            onClick={() => setIsPatch(!isPatch)}
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
                {isPatch ? (
                    <CommentPatch
                        key={`comment-${comment.id}`}
                        comment={comment}
                        setIsPatch={setIsPatch}
                        handlePutComment={(
                            commentId: number,
                            content: string
                        ) => {
                            handlePutComment(commentId, content);
                            setIsPatch(false);
                        }}
                    />
                ) : (
                    !comment.comment_id && (
                        <article className="flex flex-col gap-3 px-2">
                            <div>{comment.content}</div>
                            <div className="flex items-center gap-2 text-xs text-gray">
                                <I.ReplyComment color={theme.color.gray} />
                                <button
                                    type="button"
                                    className="cursor-pointer"
                                    onClick={() => setIsOpenReply(true)}
                                >
                                    답글달기
                                </button>
                                <span>{comment.replies.length}개</span>
                            </div>
                        </article>
                    )
                )}
                {isOpenReply && (
                    <CreateComment
                        commentId={comment.id}
                        refetchComments={refetchComments}
                        setIsOpenReply={setIsOpenReply}
                    />
                )}
            </div>
        </div>
    );
};

export default Comment;
