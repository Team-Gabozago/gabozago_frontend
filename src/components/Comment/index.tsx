import * as S from './comment.style';
import CommentProfile from './Profile';

// 뭔가 더 좋은 방법이 없을까아

const Comment = () => {
    const isCocoment = false; // 대댓글인지
    const myComment = true; // 내가 작성한 글인지
    const profile = {
        // get으로 댓글 프로필 가져오기(api요청)
        writer: '엉금엉금',
        time: '10.31 14:42',
        profileImage: '귀여운',
    };
    return (
        <S.CommentContainer isCocoment={isCocoment}>
            <CommentProfile profile={profile} />

            {myComment && (
                <S.Edit>
                    <button type="button">수정</button>
                    <button type="button">삭제</button>
                </S.Edit>
            )}
            <S.Content>답글 내용ㅁㄴㅇㄹ</S.Content>
            {!isCocoment && (
                <S.ReplyButton type="button">↳ 답글달기</S.ReplyButton>
            )}
        </S.CommentContainer>
    );
};

export default Comment;
