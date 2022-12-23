import { FeedProfileType } from '@/types/feed';

export type CommentType = {
    id: number;
    comment_id?: number;
    author: FeedProfileType;
    content: string;
    feed_author: boolean;
    updated_at: string;
    replies: CommentType[];
};

export type MyCommentType = {
    id: number;
    feed_id: number;
    content: string;
    feed_content: string;
    parent_content: string;
    created_at: string;
    updated_at: string;
    feed_author: boolean;
    modified: boolean;
};
