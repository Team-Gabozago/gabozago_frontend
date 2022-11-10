import Post from '@/components/Post';

export default function InterestedPost() {
    const post = [
        {
            title: '난 이걸 좋아요',
            info: '채나 다른 준비물은 제가 가지고있습니다다다다다다다! 공원으로 와주세요',
            writer: '투원투원',
            good: 99,
            comment: 1999,
        },
        {
            title: '관심피드입니다',
            info: '아무나 와주세요',
            writer: '투원투원',
            good: 990,
            comment: 1999,
        },
    ];
    return (
        <>
            <h1>관심 운동의 새 제안이에요</h1>

            {post.map(data => (
                <Post post={data} />
            ))}
        </>
    );
}
