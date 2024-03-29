import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import CommentList from './CommentList';
import CreateComment from './CreateComment';
import CreateInputView from './CreateInputView';

import { getComments, getReplyComments } from '@/apis/comments';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { userState } from '@/recoil/atoms/user';
import { CommentType } from '@/types/comment';

const Comments = () => {
    const user = useRecoilValue(userState);
    const { id: feedId } = useParams();
    const [allComments, setAllComments] = useState<CommentType[]>([]);
    const [isOpenCreate, setIsOpenCreate] = useState(false);

    const { data: comments, isLoading } = useQuery(['feedComments'], () => {
        if (feedId) return getComments(+feedId);
        return false;
    });

    useEffect(() => {
        async function createComments() {
            const newComments = await comments.reduce(
                async (acc: Promise<Response[]>, comment: CommentType) => {
                    // 댓글 + 대댓글 데이터 파싱하기.
                    const replyComment: CommentType[] = await getReplyComments(
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        +feedId!,
                        comment.id
                    );
                    // eslint-disable-next-line no-param-reassign
                    comment.replies = replyComment;
                    return [...(await acc), comment];
                },
                []
            );
            setAllComments(newComments);
        }

        if (comments) createComments();
    }, [comments, feedId]);

    const handleInputViewClick = () => {
        setIsOpenCreate(true);
    };

    if (isLoading) return <LoadingSpinner size="large" />;

    return (
        allComments && (
            <>
                <div className="px-6 mb-6">
                    <CreateInputView
                        profile_image={user && user.profile_image}
                        handleInputViewClick={handleInputViewClick}
                    />
                </div>
                <span className="px-6 pt-3 border-t-[1px] border-solid border-silver text-xs text-label">
                    댓글 {allComments.length}
                </span>
                <CommentList allComments={allComments} />
                {isOpenCreate && (
                    <CreateComment
                        handleCancelClick={() => setIsOpenCreate(false)}
                    />
                )}
            </>
        )
    );
};

export default Comments;
