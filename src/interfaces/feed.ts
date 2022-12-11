import { FeedProfileType } from '@/types/feed';

export interface Feed {
    author: FeedProfileType;
    comments: number;
    content: string;
    id: number;
    likes: number;
    title: string;
    updated_at: string;
    images: string[];
}
