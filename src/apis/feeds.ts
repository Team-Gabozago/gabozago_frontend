import { PostFeedType } from '@/types/feed';

export const getCategories = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(
        `${process.env.GABOZAGO_URL}/feeds/categories`,
        {
            method: 'GET',
            headers: {
                Authorization: accessToken,
                'Content-Type': 'application/json',
            },
        }
    );

    const categories = await response.json();

    try {
        return categories;
    } catch (err) {
        throw new Error(`getFeeds api fail err: ${err}`);
    }
};

export const getFeeds = async (categoryName: string, sortType: string) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(
        `${process.env.GABOZAGO_URL}/feeds/recent?categories=${categoryName}&sortType=${sortType}`,
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
        `${process.env.GABOZAGO_URL}/feeds/recent?sortType=${sortType}`,
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

    try {
        return response.ok;
    } catch (err) {
        throw new Error(`postFeed get api fail err: ${err}`);
    }
};

export const putFeed = async ({
    id,
    putFeedType,
}: {
    id: number;
    putFeedType: PostFeedType;
}) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(`${process.env.GABOZAGO_URL}/feeds/${id}`, {
        method: 'PUT',
        headers: {
            Authorization: accessToken,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(putFeedType),
    });

    try {
        return response.ok;
    } catch (err) {
        throw new Error(`putFeed get api fail err: ${err}`);
    }
};

export const getFeed = async (id: number) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(`${process.env.GABOZAGO_URL}/feeds/${id}`, {
        method: 'GET',
        headers: {
            Authorization: accessToken,
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    try {
        return data;
    } catch (err) {
        throw new Error(`getFeed api fail err: ${err}`);
    }
};

export const unLikeFeed = async (id: number) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(
        `${process.env.GABOZAGO_URL}/feeds/${id}/unlike`,
        {
            method: 'POST',
            headers: {
                Authorization: accessToken,
                'Content-Type': 'application/json',
            },
        }
    );

    try {
        return response.ok;
    } catch (err) {
        throw new Error(`unLikeFeed api fail err: ${err}`);
    }
};

export const likeFeed = async (id: number) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(
        `${process.env.GABOZAGO_URL}/feeds/${id}/like`,
        {
            method: 'POST',
            headers: {
                Authorization: accessToken,
                'Content-Type': 'application/json',
            },
        }
    );

    try {
        return response.ok;
    } catch (err) {
        throw new Error(`likeFeed  api fail err: ${err}`);
    }
};

export const deleteFeed = async (id: number) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(`${process.env.GABOZAGO_URL}/feeds/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: accessToken,
            'Content-Type': 'application/json',
        },
    });

    try {
        return response.ok;
    } catch (err) {
        throw new Error(`deleteFeed api fail err: ${err}`);
    }
};
