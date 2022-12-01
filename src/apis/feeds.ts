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
        throw new Error(`getMypage get api fail err: ${err}`);
    }
};
