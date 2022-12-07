import * as S from './post.style';

import { IPost } from '@/types/post';
import { calculateDate } from '@/utils/date'

interface IPostProps {
    post: IPost;
}
const Post = ({ post }: IPostProps) => {
    const { title, content, author, likes, comments, updatedAt, image } = post;

    return (
        <S.PostContainer>
            {image && <S.ImageContainer />}
            <S.Post>
                <S.Time>{calculateDate(updatedAt)}</S.Time>
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
