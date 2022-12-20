import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CommentList from './CommentList';
import CreateComment from './Create';

import { getComments, getReplyComments } from '@/apis/comments';
import { AllCommentType, CommentType } from '@/types/comment';

const Comments = () => {
    const { id: feedId } = useParams();
    const [allComments, setAllComments] = useState<AllCommentType[]>([]);

    const { data: comments, refetch: refetchComments } = useQuery(
        ['feedComments'],
        () => {
            if (feedId) return getComments(+feedId);
            return false;
        }
    );

    useEffect(() => {
        async function createComments() {
            const newComments = await comments.reduce(
                async (acc: Promise<Response[]>, comment: AllCommentType) => {
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

    return (
        allComments && (
            <>
                <CreateComment refetchComments={refetchComments} />
                <span className="pt-3 border-t-1 border-solid border-gray text-xs text-label">
                    댓글 {allComments.length}
                </span>
                <CommentList
                    allComments={allComments}
                    refetchComments={refetchComments}
                />
            </>
        )
    );
};

export default Comments;
