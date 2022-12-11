export const getMyArea = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(`${process.env.GABOZAGO_URL}/users/area`, {
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
        throw new Error(`getMyArea api fail err: ${err}`);
    }
};

export const getAreaInfos = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(`${process.env.GABOZAGO_URL}/users/areas`, {
        method: 'GET',
        headers: {
            Authorization: accessToken,
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    try {
        return data.areas;
    } catch (err) {
        throw new Error(`getAreaInfos api fail err: ${err}`);
    }
};
