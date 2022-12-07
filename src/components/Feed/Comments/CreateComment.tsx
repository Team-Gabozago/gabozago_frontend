import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';

import * as S from './Comments.style';

import { postComment } from '@/apis/comments';

interface CommentProps {
    id: number;
    profileImageUrl: string;
    refetchComments: () => void;
}

const CreateComment = ({
    id,
    profileImageUrl,
    refetchComments,
}: CommentProps) => {
    const [content, setcontent] = useState('');

    const fetchPostComment = useMutation(postComment, {
        onSuccess: async () => {
            refetchComments();
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const handleChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        setcontent(e.target.value);
    };

    const handleAddComment = () => {
        fetchPostComment.mutate({ id, content });
    };

    return (
        <S.CreateComment>
            <S.CommentImg
                src={profileImageUrl || process.env.GABOZAGO_DEFAULT_IMAGE}
                alt="프로필 이미지"
            />
            <S.CommentInput
                value={content}
                placeholder="댓글을 입력해주세요."
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeComment(e)
                }
            />
            <S.CommentAddButton onClick={handleAddComment}>
                등록
            </S.CommentAddButton>
        </S.CreateComment>
    );
};

export default CreateComment;
