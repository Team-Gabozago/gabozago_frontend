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
        return myPassword.code;
    } catch (err) {
        throw new Error(`getMyPassword get api fail err: ${err}`);
    }
};

export const patchMyPassword = async ({
    currentPassword,
    newPassword,
}: {
    currentPassword: string;
    newPassword: string;
}) => {
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
        return data.code;
    } catch (err) {
        throw new Error(`patchMyPassword patch api fail err: ${err}`);
    }
};

export const postMyImageFile = async (files: any) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const formData = new FormData();
    formData.append('image', files);

    const response = await fetch(`${process.env.GABOZAGO_URL}/profile/images`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            Authorization: accessToken,
        },
        body: formData,
    });

    const data = await response.json();

    try {
        return { code: data.code, profileImage: data.image_url };
    } catch (err) {
        throw new Error(`patchMyPassword patch api fail err: ${err}`);
    }
};

export const patchMyInfo = async (nickname: string) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(`${process.env.GABOZAGO_URL}/profile`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
            Authorization: accessToken,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nickname }),
    });

    const data = await response.json();

    try {
        return data;
    } catch (err) {
        throw new Error(`patchMyPassword patch api fail err: ${err}`);
    }
};
