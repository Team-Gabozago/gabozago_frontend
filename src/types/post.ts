import { FeedProfileType } from './feed';

export type IPost = {
    id: number;
    title: string;
    content: string;
    author: FeedProfileType;
    likes: number;
    comments: number;
    updatedAt: string;
    image: string;
};

export type IComment = {
    id: number;
    title: string;
    content: string;
    time: string;
};

export type IProfile = {
    writer: string;
    time?: string;
    profileImage: string;
};

// 마이페이지
export type MyPageResponse = {
    id: string;
    email: string;
    nickname: string;
    profile_image: string;
    sport_category: Array<string>;
};
