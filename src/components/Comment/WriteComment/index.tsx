import * as S from './writeComment.style';

interface Props {
    readOnly?: boolean;
}

const WriteComment = ({ readOnly }: Props) => {
    const asdf = 1;
    return (
        <S.Container>
            <S.Profile>프로필</S.Profile>
            <S.InputContainer>
                <S.Input
                    type="text"
                    placeholder="댓글을 입력해주세요"
                    readOnly={!!readOnly}
                />
                <S.Button type="button">등록</S.Button>
            </S.InputContainer>
        </S.Container>
    );
};

export default WriteComment;
