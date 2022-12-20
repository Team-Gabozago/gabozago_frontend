import { FeedProfileType } from '@/types/feed';

export type CommentType = {
    id: number;
    comment_id?: number;
    author: FeedProfileType;
    content: string;
    feed_author: boolean;
    updated_at: string;
};

export type AllCommentType = CommentType & { replies: CommentType[] };
