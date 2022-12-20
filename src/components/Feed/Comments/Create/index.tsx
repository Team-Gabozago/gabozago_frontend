import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { postComment, postReplyComment } from '@/apis/comments';
import { userState } from '@/recoil/atoms/user';

interface CommentProps {
    refetchComments: () => void;
    commentId?: number;
    setIsOpenReply?: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateComment = ({
    refetchComments,
    commentId,
    setIsOpenReply,
}: CommentProps) => {
    const { id } = useParams();
    const user = useRecoilValue(userState);
    const [content, setcontent] = useState('');

    const fetchPostComment = useMutation(postComment, {
        onSuccess: async () => {
            refetchComments();
            setcontent('');
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const fetchPostReplyComment = useMutation(postReplyComment, {
        onSuccess: async () => {
            refetchComments();
            setcontent('');
            if (setIsOpenReply) setIsOpenReply(false);
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const handleChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        setcontent(e.target.value);
    };

    const handleAddComment = () => {
        if (commentId) {
            fetchPostReplyComment.mutate({ id, content, commentId });
        } else {
            fetchPostComment.mutate({ id, content });
        }
    };

    return (
        <div className="flex items-center gap-6 relative">
            <img
                className="w-8 h-8 rounded-full"
                src={user.profile_image || process.env.GABOZAGO_DEFAULT_IMAGE}
                alt="프로필 이미지"
            />
            <input
                type="input"
                className="w-80 p-3 border-b-1 border-solid border-gray"
                value={content}
                placeholder="댓글을 입력해주세요."
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeComment(e)
                }
            />
            <button
                type="button"
                className="absolute top-3 right-3 text-gray"
                onClick={handleAddComment}
            >
                등록
            </button>
        </div>
    );
};

export default CreateComment;
