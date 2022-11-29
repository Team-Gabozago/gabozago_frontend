export const deleteSport = async (sportId: number) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(
        `${process.env.GABOZAGO_URL}/profile/favorites/${sportId}`,
        {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                Authorization: accessToken,
                'Content-Type': 'application/json',
            },
        }
    );

    const data = await response.json();

    try {
        return data.code;
    } catch (err) {
        throw new Error(`deleteSport api fail err: ${err}`);
    }
};

export const patchSport = async (sportId: number) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(
        `${process.env.GABOZAGO_URL}/profile/favorites/${sportId}`,
        {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                Authorization: accessToken,
                'Content-Type': 'application/json',
            },
        }
    );

    const data = await response.json();

    try {
        return data;
    } catch (err) {
        throw new Error(`patchSport api fail err: ${err}`);
    }
};
