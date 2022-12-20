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

export const getReplyComments = async (feedId: number, commentId: number) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(
        `${process.env.GABOZAGO_URL}/feeds/${feedId}/comments/${commentId}/replies`,
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
        throw new Error(`getReplyComments api fail err: ${err}`);
    }
};

export const postReplyComment = async ({
    id,
    content,
    commentId,
}: {
    id: number;
    content: string;
    commentId: number;
}) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(
        `${process.env.GABOZAGO_URL}/feeds/${id}/comments/${commentId}/replies`,
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
        return data;
    } catch (err) {
        throw new Error(`replyPostComment api fail err: ${err}`);
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
    id,
    commentId,
}: {
    id: number;
    commentId: number;
}) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(
        `${process.env.GABOZAGO_URL}/feeds/${id}/comments/${commentId}`,
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
    id,
    commentId,
    content,
}: {
    id: number;
    commentId: number;
    content: string;
}) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('accessToken is undefined');

    const response = await fetch(
        `${process.env.GABOZAGO_URL}/feeds/${id}/comments/${commentId}`,
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
