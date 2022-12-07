import { FeedProfileType } from '@/types/feed';

export interface Comment {
    id: number;
    author: FeedProfileType;
    content: string;
    feed_author: boolean;
    updated_at: string;
}
