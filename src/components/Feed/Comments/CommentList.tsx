import { useRecoilValue } from 'recoil';

import FeedProfile from '../Profile';

import * as S from './CommentList.style';

import { Comment } from '@/interfaces/comment';
import { userState } from '@/recoil/atoms/user';

interface CommentListProps {
    comments: Comment[];
}

const CommentList = ({ comments }: CommentListProps) => {
    const user = useRecoilValue(userState);

    return (
        <S.CommentList>
            {comments &&
                comments.map((comment: Comment) => (
                    <S.Comment key={`comment-${comment.id}`}>
                        <S.Header>
                            <FeedProfile
                                author={comment.author}
                                updatedAt={comment.updated_at}
                            />
                            {user.id === comment.author.id && (
                                <S.TextWrapper>
                                    <S.Text>수정</S.Text>
                                    <S.Text>삭제</S.Text>
                                </S.TextWrapper>
                            )}
                        </S.Header>
                        <S.Content>{comment.content}</S.Content>
                    </S.Comment>
                ))}
        </S.CommentList>
    );
};

export default CommentList;
