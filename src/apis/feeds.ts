import { PostFeedType } from '@/types/feed';

export const getFeeds = async (categoryName: string, sortType: string) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(
        `${process.env.GABOZAGO_URL}/feeds/recent?categoryName=${categoryName}&sortType=${sortType}`,
        {
            method: 'GET',
            headers: {
                Authorization: accessToken,
                'Content-Type': 'application/json',
            },
        }
    );

    const data = await response.json();

    try {
        return data.feeds;
    } catch (err) {
        throw new Error(`getFeeds api fail err: ${err}`);
    }
};

export const getAllFeeds = async (sortType: string) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(
        `${process.env.GABOZAGO_URL}/feeds/recent?categoryName=''&sortType=${sortType}`,
        {
            method: 'GET',
            headers: {
                Authorization: accessToken,
                'Content-Type': 'application/json',
            },
        }
    );

    const data = await response.json();

    try {
        return data.feeds;
    } catch (err) {
        throw new Error(`getAllFeeds api fail err: ${err}`);
    }
};

export const postImageFile = async (files: any) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const formData = new FormData();
    formData.append('image', files);

    const response = await fetch(`${process.env.GABOZAGO_URL}/images`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            Authorization: accessToken,
        },
        body: formData,
    });

    const data = await response.json();

    try {
        return data.url;
    } catch (err) {
        throw new Error(`postImageFile api fail err: ${err}`);
    }
};

export const postFeed = async (postFeedType: PostFeedType) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(`${process.env.GABOZAGO_URL}/feeds`, {
        method: 'POST',
        headers: {
            Authorization: accessToken,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postFeedType),
    });

    const data = await response.json();

    try {
        return data;
    } catch (err) {
        throw new Error(`postFeed get api fail err: ${err}`);
    }
};
