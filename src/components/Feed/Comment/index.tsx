import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';

import * as S from './CreateComment.style';

import { postComment } from '@/apis/comment';

interface CommentProps {
    feedId: number;
}

const CreateComment = ({ feedId }: CommentProps) => {
    const [comment, setComment] = useState('');

    const fetchPostComment = useMutation(postComment, {
        onSuccess: async () => {},
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const handleChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    };

    const handleAddComment = () => {
        fetchPostComment(feedId, comment);
    };

    return (
        <S.CreateComment>
            <S.CommentImg
                src={process.env.GABOZAGO_DEFAULT_IMAGE}
                alt="프로필 이미지"
            />
            <S.CommentInput
                value={comment}
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
