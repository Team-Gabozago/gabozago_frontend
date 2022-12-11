export const getComments = async (id: number) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(
        `${process.env.GABOZAGO_URL}/feeds/${id}/comments`,
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
        return data;
    } catch (err) {
        throw new Error(`getComments api fail err: ${err}`);
    }
};

export const postComment = async ({
    id,
    content,
}: {
    id: number;
    content: string;
}) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(
        `${process.env.GABOZAGO_URL}/feeds/${id}/comments`,
        {
            method: 'POST',
            headers: {
                Authorization: accessToken,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(content),
        }
    );

    const data = await response.json();

    try {
        return data.id;
    } catch (err) {
        throw new Error(`postComment api fail err: ${err}`);
    }
};

export const deleteComment = async ({
    feedId,
    commentId,
}: {
    feedId: number;
    commentId: number;
}) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(
        `${process.env.GABOZAGO_URL}/feeds/${feedId}/comments/${commentId}`,
        {
            method: 'DELETE',
            headers: {
                Authorization: accessToken,
                'Content-Type': 'application/json',
            },
        }
    );

    try {
        return response.ok;
    } catch (err) {
        throw new Error(`deleteComment api fail err: ${err}`);
    }
};

export const patchComment = async ({
    feedId,
    commentId,
    content,
}: {
    feedId: number;
    commentId: number;
    content: string;
}) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(
        `${process.env.GABOZAGO_URL}/feeds/${feedId}/comments/${commentId}`,
        {
            method: 'PATCH',
            headers: {
                Authorization: accessToken,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content }),
        }
    );

    try {
        return response.ok;
    } catch (err) {
        throw new Error(`patchComment api fail err: ${err}`);
    }
};
