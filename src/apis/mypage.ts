export const getMyPage = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(`${process.env.GABOZAGO_URL}/profile`, {
        method: 'GET',
        headers: {
            Authorization: accessToken,
            'Content-Type': 'application/json',
        },
    });
    const mypageData = await response.json();

    try {
        if (mypageData.code === 'UNAUTHENTICATED') {
            return 403;
        }

        return mypageData;
    } catch (err) {
        throw new Error(`getMypage get api fail err: ${err}`);
    }
};

export const checkMyPassword = async (currentPassword: string) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(
        `${process.env.GABOZAGO_URL}/auth/check-password`,
        {
            method: 'POST',
            headers: {
                Authorization: accessToken,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password: currentPassword }),
        }
    );

    const myPassword = await response.json();

    try {
        if (myPassword) {
            return myPassword.correct;
        }
    } catch (err) {
        throw new Error(`getMyPassword get api fail err: ${err}`);
    }
};

export const patchMyPassword = async (
    currentPassword: string,
    newPassword: string
) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(`${process.env.GABOZAGO_URL}/auth/password`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
            Authorization: accessToken,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: currentPassword, newPassword }),
    });

    const data = await response.json();

    try {
        return data;
    } catch (err) {
        throw new Error(`patchMyPassword patch api fail err: ${err}`);
    }
};
