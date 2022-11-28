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
        if (data) {
            const { headers } = response;

            if (headers.get('authorization')) {
                localStorage.setItem(
                    'accessToken',
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    headers.get('authorization')!
                );
            }
        }

        return data.message;
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
        if (data) {
            const { headers } = response;
            if (headers.get('Authorization')) {
                localStorage.setItem(
                    'accessToken',
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    headers.get('Authorization')!
                );
                return data.message;
            }

            if (data.code === 'PASSWORD_WRONG') {
                return 'PASSWORD_WRONG';
            }
            if (data.code === 'USER_NOT_FOUND') {
                return 'USER_NOT_FOUND';
            }
        }
    } catch (err) {
        throw new Error(`postLoginUser api fail err: ${err}`);
    }
};

export const secessionUser = async () => {
    const response = await fetch(`${process.env.GABOZAGO_URL}/mypage/out`);
    const { data } = response;
    return data;
};
