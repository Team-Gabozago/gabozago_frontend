import * as S from './Post.style';

import { Feed } from '@/interfaces/feed';
import { calculateDate } from '@/utils/date'


const Post = ({ post }: { post: Feed }) => {
    // eslint-disable-next-line camelcase
    const { author, comments, content, id, likes, title, updated_at, images } = post;

    return (
        <S.PostContainer>
            {images && <S.ImageContainer />}
            <S.Post>
                <S.Time>{calculateDate(updated_at)}</S.Time>
                <S.Title>{title}</S.Title>
                <S.Content>{content}</S.Content>
                <S.WriterContainer>
                    <span>{author.nickname}</span>
                    <S.WriterUl>
                        <li>하트 {likes}</li>
                        <li>댓글 {comments}</li>
                    </S.WriterUl>
                </S.WriterContainer>
            </S.Post>
        </S.PostContainer>
    );
};

export default Post;
