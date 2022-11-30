import * as S from './MyComment.style';

import Header from '@/components/MyPage/Header';

const MyCommentPage = () => {
    const posts = [
        {
            title: '배드민턴/1명/여자/원투공원/저녁10시까지',
            content: 'content',
            time: '11.03',
        },
        {
            title: '같이 배드민턴 쳐요!',
            content: 'content',
            time: '10.14',
        },
        {
            title: '모닝 배드민턴 쳐요^^',
            content: 'content',
            time: '08.25',
        },
    ];
    return (
        <S.MyCommentPage>
            <Header title="내가 쓴 댓글/답글" />
            <S.MyCommentContent>
                <S.SubTitle>길게 눌러 삭제</S.SubTitle>
                {posts.map(post => (
                    <S.PostContainer>
                        <S.Time>{post.time}</S.Time>
                        <S.Title>{post.title}</S.Title>
                        <S.Divider />
                        <S.Content>{post.content}</S.Content>
                    </S.PostContainer>
                ))}
            </S.MyCommentContent>
            <S.EndPointWrapper>
                <S.EndPoint />
            </S.EndPointWrapper>
        </S.MyCommentPage>
    );
};

export default MyCommentPage;
