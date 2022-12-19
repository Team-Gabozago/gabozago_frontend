import { PostSignupBodyType, PostLoginBodyType } from '@/types/user';

export const postSignupUser = async (
    postSignupBodyType: PostSignupBodyType
) => {
    const response = await fetch(`${process.env.GABOZAGO_URL}/auth/join`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postSignupBodyType),
    });

    const data = await response.json();

    try {
        const { headers } = response;
        const accessToken = headers.get('Authorization');
        if (accessToken) {
            localStorage.setItem('accessToken', accessToken);
        }

        return data.code;
    } catch (err) {
        throw new Error(`postUser api fail err: ${err}`);
    }
};

export const duplicateEmail = async (email: string) => {
    const response = await fetch(
        `${process.env.GABOZAGO_URL}/auth/email-exists`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        }
    );

    const data = await response.json();

    try {
        return data.code;
    } catch (err) {
        throw new Error(`duplicateEmail api fail err: ${err}`);
    }
};

export const postLoginUser = async (postLoginBodyType: PostLoginBodyType) => {
    const response = await fetch(`${process.env.GABOZAGO_URL}/auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postLoginBodyType),
    });

    const data = await response.json();

    try {
        const { headers } = response;
        const accessToken = headers.get('Authorization');
        if (accessToken) {
            localStorage.setItem('accessToken', accessToken);
        }

        return data.code;
    } catch (err) {
        throw new Error(`postLoginUser api fail err: ${err}`);
    }
};

export const secessionUser = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(`${process.env.GABOZAGO_URL}/profile`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            Authorization: accessToken,
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    try {
        return data.code;
    } catch (err) {
        throw new Error(`secessionUser api fail err: ${err}`);
    }
};
