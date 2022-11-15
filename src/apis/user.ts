import { PostUserBodyType } from '@/types/user';

export const postUser = async (postUserBodyType: PostUserBodyType) => {
    const response = await fetch(`${process.env.GABOZAGO_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postUserBodyType),
    });

    const data = await response.json();

    try {
        return data;
    } catch (err) {
        throw new Error(`postUser api fail err: ${err}`);
    }
};

export const duplicateEmail = async (email: string) => {
    const response = await fetch(`${process.env.GABOZAGO_URL}/email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(email),
    });

    const data = await response.json();

    try {
        return data;
    } catch (err) {
        throw new Error(`duplicateEmail api fail err: ${err}`);
    }
};
