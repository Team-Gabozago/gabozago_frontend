import * as S from './Home.style';

import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Post from '@/components/Post';
import WriteButton from '@/components/WriteButton';

export default function HomePage() {
    const post = [
        {
            title: '배드민턴/1명/여자',
            content:
                '채나 다른 준비물은 제가 가지고있습니다다다다다다다! 공원으로 와주세요',
            writer: '투원투원',
            good: 99,
            comment: 1999,
            time: '3분전',
            image: '',
        },
        {
            title: '배드민턴/3명/남자여자',
            content: '아무나 와주세요',
            writer: '투원투원',
            good: 990,
            comment: 1999,
            time: '하루전',
            image: 'ggg',
        },
    ];
    return (
        <>
            {/* <Header /> */}
            <h1>우리 동네의 새 제안이에요</h1>
            <S.HomeContainer />
            {post.map(data => (
                <Post post={data} />
            ))}
            <WriteButton />
            <Footer />
        </>
    );
}
