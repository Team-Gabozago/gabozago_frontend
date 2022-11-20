import { Link } from 'react-router-dom';

import * as S from './postView.style';

import Comment from '@/components/Comment/Comment';
import CommentProfile from '@/components/Comment/Comment/Profile';
import WriteComment from '@/components/Comment/WriteComment';

const PostView = () => {
    const profile = {
        // get으로 댓글 프로필 가져오기(api요청)
        writer: '엉금엉금',
        time: '10.31 14:42',
        profileImage: '귀여운',
    };
    const WriteCommentTrue = true;
    return (
        <S.ViewContainer>
            <S.Title>
                <Link to="/">⬅</Link>
                매주 목 퇴근 후 배드민턴
            </S.Title>
            <S.ProfileContainer>
                <CommentProfile profile={profile} />
                <S.EditButton type="button">수정</S.EditButton>
            </S.ProfileContainer>
            <S.ContentContainer>
                <p>원투공원</p>
                <S.Content>content</S.Content>
                <S.InterestedButton type="button">
                    관심있어요
                </S.InterestedButton>
            </S.ContentContainer>

            <WriteComment readOnly={WriteCommentTrue} />

            <div>
                {/* 댓글리스트 */}
                <ul>
                    <Comment />
                </ul>
            </div>
        </S.ViewContainer>
    );
};

export default PostView;
