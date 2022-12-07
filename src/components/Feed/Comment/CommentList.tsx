import FeedProfile from '../Profile';

import * as S from './CommentList.style';

import { FeedProfileType } from '@/types/feed';

interface CommentListProps {
    author: FeedProfileType,
    updatedAt: string
}

const CommentList = ({ author, updatedAt }: CommentListProps) => (
    <S.CommentList>
        <S.Comment>
            <FeedProfile author={author} updatedAt={updatedAt} />
        </S.Comment>
    </S.CommentList>
);

export default CommentList;
