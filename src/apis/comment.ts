export const postComment = async (id: number, comment: string) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(`${process.env.GABOZAGO_URL}/${id}/comments`, {
        method: 'POST',
        headers: {
            Authorization: accessToken,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment }),
    });

    const data = await response.json();

    try {
        return data;
    } catch (err) {
        throw new Error(`postComment api fail err: ${err}`);
    }
};
