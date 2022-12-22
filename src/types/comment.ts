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
