import * as S from './Home.style';

import Header from '@/components/common/Header';
import Post from '@/components/Post';

export default function HomePage() {
    const post = [
        {
            title: '배드민턴/1명/여자',
            info: '채나 다른 준비물은 제가 가지고있습니다다다다다다다! 공원으로 와주세요',
            writer: '투원투원',
            good: 99,
            comment: 1999,
        },
        {
            title: '배드민턴/3명/남자여자',
            info: '아무나 와주세요',
            writer: '투원투원',
            good: 990,
            comment: 1999,
        },
    ];
    return (
        <>
            <Header />
            <h1>우리 동네의 새 제안이에요</h1>
            <S.HomeContainer />
            {post.map(data => (
                <Post post={data} />
            ))}
        </>
    );
}
