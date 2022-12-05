import FeedProfile from '../Profile';

import * as S from './CommentList.style';

const CommentList = () => (
    <S.CommentList>
        <S.Comment>
            <FeedProfile />
        </S.Comment>
        <S.Comment>
            <FeedProfile />
        </S.Comment>
        <S.Comment>
            <FeedProfile />
        </S.Comment>
    </S.CommentList>
);

export default CommentList;
