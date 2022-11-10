import React from 'react';

import { IPost } from '@/types/post';

interface IPostProps {
    post: IPost;
}
const Post = ({ post }: IPostProps) => {
    const { title, info, writer, good, comment } = post;
    return (
        <div>
            <h2>{title}</h2>
            <p>{info}</p>
            <div>
                <div>{writer}</div>
                <ul>
                    <li>하트 {good}</li>
                    <li>댓글 {comment}</li>
                </ul>
            </div>
        </div>
    );
};

export default Post;
