export const calculateDate = (updatedAt: string, comment?: string) => {
    if (!updatedAt) return '';

    const updatedDate = new Date(updatedAt);
    const diffDate = new Date().getTime() - updatedDate.getTime();

    const day = Math.floor(diffDate / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diffDate / (1000 * 60 * 60));
    const minutes = Math.floor(diffDate / (1000 * 60));

    if (day) {
        return `${updatedDate.getMonth() + 1}.${
            updatedDate.getDate() < 10
                ? `0${updatedDate.getDate()}`
                : updatedDate.getDate()
        }`;
    }

    if (hours) return `${hours}시간 전`;
    if (minutes) return `${minutes}분 전`;
    return '방금 전';
};
