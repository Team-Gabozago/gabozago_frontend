import React, { Dispatch, SetStateAction, useState } from 'react';

import { CommentType } from '@/types/comment';

interface CommentPatchProps {
    comment: CommentType;
    setIsPatch: Dispatch<SetStateAction<boolean>>;
    handlePutComment: (commentId: number, content: string) => void;
}

const CommentPatch = ({
    comment,
    setIsPatch,
    handlePutComment,
}: CommentPatchProps) => {
    const [value, setValue] = useState(comment.content);

    const handleChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div className="flex justify-between items-center">
            <input
                type="text"
                className="w-60 p-3.5 border-b border-solid border-silver"
                value={value}
                placeholder="변경할 댓글을 입력해주세요."
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeComment(e)
                }
            />
            <div className="flex gap-4">
                <button
                    type="button"
                    className="text-xs color-label"
                    onClick={() => handlePutComment(comment.id, value)}
                >
                    변경
                </button>
                <button
                    type="button"
                    className="text-xs color-label"
                    onClick={() => setIsPatch(false)}
                >
                    취소
                </button>
            </div>
        </div>
    );
};

export default CommentPatch;
