import * as S from './MyBoard.style';

import Header from '@/components/MyPage/Header';
import Post from '@/components/Post';
import { IPost } from '@/types/post';

const MyBoardPage = () => {
    const posts = [
        {
            title: '배드민턴/1명/여자/원투공원/저녁10시까지',
            content: 'content',
            writer: 'muffin',
            good: 3,
            comment: 5,
            time: '11.03',
            image: '',
        },
        {
            title: '같이 배드민턴 쳐요!',
            content: 'content',
            writer: 'muffin',
            good: 3,
            comment: 5,
            time: '10.14',
            image: '',
        },
        {
            title: '모닝 배드민턴 쳐요^^',
            content: 'content',
            writer: 'muffin',
            good: 3,
            comment: 5,
            time: '08.25',
            image: '',
        },
    ];
    return (
        <S.MyLikePage>
            <Header title="내가 쓴 게시글" />
            <S.MyLikeContent>
                <S.SubTitle>길게 눌러 삭제</S.SubTitle>
                {posts.map((post: IPost) => (
                    <Post post={post} />
                ))}
            </S.MyLikeContent>
            <S.EndPointWrapper>
                <S.EndPoint />
            </S.EndPointWrapper>
        </S.MyLikePage>
    );
};

export default MyBoardPage;
