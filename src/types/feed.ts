export type PostFeedType = {
    categoryId: number;
    title: string;
    content: string;
    longitude: number;
    latitude: number;
    place: string;
    placeDetail: string;
    images: string[];
};

export type FeedProfileType = {
    id: number;
    nickname: string;
    profile_image_url: string;
};
