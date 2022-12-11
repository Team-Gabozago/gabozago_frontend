import { FeedProfileType } from '@/types/feed';

export interface Comment {
    id: number;
    author: FeedProfileType;
    content: string;
    feed_id: number;
    feed_author: boolean;
    created_at: string;
}
