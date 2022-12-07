import { useQuery } from '@tanstack/react-query';

import CommentList from './CommentList';
import * as S from './Comments.style';
import CreateComment from './CreateComment';

import { getComments } from '@/apis/comments';

interface CommentProps {
    id: number;
    profileImageUrl: string;
}

const Comments = ({ id, profileImageUrl }: CommentProps) => {
    const { data: comments, refetch: refetchComments } = useQuery(
        ['feedComments'],
        () => {
            if (id) return getComments(id);
            return false;
        }
    );

    return (
        comments && (
            <>
                <CreateComment
                    id={id}
                    profileImageUrl={profileImageUrl}
                    refetchComments={refetchComments}
                />
                <S.CommentTotalText>댓글 {comments.length}</S.CommentTotalText>
                <CommentList comments={comments} />
            </>
        )
    );
};

export default Comments;
