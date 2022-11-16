export type IPost = {
    title: string;
    content: string;
    writer: string;
    good: number;
    comment: number;
    time: string;
    image: string;
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
