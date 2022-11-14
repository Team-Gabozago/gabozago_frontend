import React from 'react';

import * as S from './post.style';

import { IPost } from '@/types/post';

interface IPostProps {
    post: IPost;
}
const Post = ({ post }: IPostProps) => {
    const { title, content, writer, good, comment, time, image } = post;
    return (
        <S.PostContainer>
            {image && <S.ImageContainer />}
            <S.Post>
                <S.Time>{time}</S.Time>
                <S.Title>{title}</S.Title>
                <S.Content>{content}</S.Content>
                <S.WriterContainer>
                    <span>{writer}</span>
                    <S.WriterUl>
                        <li>하트 {good}</li>
                        <li>댓글 {comment}</li>
                    </S.WriterUl>
                </S.WriterContainer>
            </S.Post>
        </S.PostContainer>
    );
};

export default Post;
