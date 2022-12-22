import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import CreateInputView from '../CreateInputView';

import { postComment, postReplyComment } from '@/apis/comments';
import Overlayout from '@/components/OverLayout';
import { userState } from '@/recoil/atoms/user';

interface CreateCommentProps {
    refetchComments: () => void;
    isPatch?: boolean;
    commentId?: number;
    commentContent?: string;
    handleCancelClick: () => void;
    handlePutComment?: (commentId: number, content: string) => void;
}

const CreateComment = ({
    refetchComments,
    isPatch,
    commentId,
    commentContent,
    handleCancelClick,
    handlePutComment,
}: CreateCommentProps) => {
    // 댓글 등록, 수정, 대댓글 등록, 수정 에서 모두 사용되어지는 컴포넌트. props가 점점 많아진다. 어떻게 해결 할 수 없으려나??
    const user = useRecoilValue(userState);
    const { id } = useParams();

    const [currentContent, setCurrentContent] = useState(commentContent);

    const fetchPostComment = useMutation(postComment, {
        onSuccess: async () => {
            refetchComments();
            setCurrentContent('');
            handleCancelClick();
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const fetchPostReplyComment = useMutation(postReplyComment, {
        onSuccess: async () => {
            refetchComments();
            setCurrentContent('');
            handleCancelClick();
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const handleChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentContent(e.target.value);
    };

    const handleAddComment = () => {
        if (commentId) {
            if (isPatch && handlePutComment && commentId && currentContent) {
                handlePutComment(commentId, currentContent);
                handleCancelClick();
            } else {
                fetchPostReplyComment.mutate({
                    id,
                    content: currentContent,
                    commentId,
                });
            }
        } else {
            fetchPostComment.mutate({ id, content: currentContent });
        }
    };

    return (
        <>
            <Overlayout handleCancelClick={handleCancelClick} />
            <div className="w-[23.4375rem] h-[5.5rem] fixed bottom-0 p-6 bg-white rounded-t-lg z-[1000]">
                <CreateInputView
                    profile_image={user && user.profile_image}
                    content={currentContent}
                    handleChangeComment={handleChangeComment}
                    handleAddComment={handleAddComment}
                />
            </div>
        </>
    );
};

export default CreateComment;
