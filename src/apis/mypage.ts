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

export const getMyPassword = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(
        `${process.env.GABOZAGO_URL}/auth/check-password`,
        {
            method: 'GET',
            headers: {
                Authorization: accessToken,
                'Content-Type': 'application/json',
            },
        }
    );

    const myPassword = await response.json();

    try {
        return myPassword;
    } catch (err) {
        throw new Error(`getMypage get api fail err: ${err}`);
    }
};
