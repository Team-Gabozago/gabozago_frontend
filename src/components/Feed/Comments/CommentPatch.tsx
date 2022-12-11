import React, { Dispatch, SetStateAction, useState } from 'react';

import * as S from './CommentList.style';

import { Comment } from '@/interfaces/comment';

interface CommentPatchProps {
    comment: Comment;
    setIsPatch: Dispatch<SetStateAction<boolean>>;
    handlePutComment: (commentId: number, content: string) => void
}

const CommentPatch = ({ comment, setIsPatch, handlePutComment }: CommentPatchProps) => {
    const [value, setValue] = useState(comment.content);

    const handleChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return (
        <S.CommentBox>
            <S.PatchCommentInput
                type="text"
                value={value}
                placeholder="변경할 댓글을 입력해주세요."
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeComment(e)} />
            <S.ButtonWrapper>
                <S.Button onClick={() => handlePutComment(comment.id, value)} >변경</S.Button>
                <S.Button onClick={() => setIsPatch(false)}>취소</S.Button>
            </S.ButtonWrapper>
        </S.CommentBox >
    )
}

export default CommentPatch;