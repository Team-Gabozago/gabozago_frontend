import { css } from '@emotion/react';

import * as S from './LikeSportModal.style';

import Button from '@/components/common/Button';
import { useInput } from '@/hooks/useInput';
import theme from '@/styles/theme';
import { LikeSportType } from '@/types/sport';

interface LikeSportModalProps {
    likeSports: LikeSportType[];
    handleCancelModal: () => void;
}

const LikeSportModal = ({
    likeSports,
    handleCancelModal,
}: LikeSportModalProps) => {
    const {
        value: keyword,
        setValue: setKeyword,
        onChange: handleChangeKeyword,
    } = useInput('');

    return (
        <S.LikeSportModal>
            <S.Title>관심 운동 추가/삭제</S.Title>
            <S.CurrentLikeSport>
                <S.SubTitle>현재 관심 운동</S.SubTitle>
                <S.SportWrapper>
                    {likeSports.map(sport => (
                        <S.SportTag id={sport.id}>
                            {sport.name}
                            <S.SportMinusButton>-</S.SportMinusButton>
                        </S.SportTag>
                    ))}
                </S.SportWrapper>
            </S.CurrentLikeSport>
            <S.SearchLikeSportForm>
                <S.SubTitle>다른 운동 검색</S.SubTitle>
                <S.SearchInput
                    name="keyword"
                    type="text"
                    value={keyword}
                    placeholder="추가하고 싶은 운동을 검색해 보세요"
                    onChange={handleChangeKeyword}
                    autoFocus
                />
                <S.SearchContent>
                    <S.KeywordBox>
                        <span>Dummy Data...</span>
                        <S.KeywordPlustButton>+</S.KeywordPlustButton>
                    </S.KeywordBox>
                    <S.KeywordBox>
                        <span>Dummy Data...</span>
                        <S.KeywordPlustButton>+</S.KeywordPlustButton>
                    </S.KeywordBox>
                    <S.KeywordBox>
                        <span>Dummy Data...</span>
                        <S.KeywordPlustButton>+</S.KeywordPlustButton>
                    </S.KeywordBox>
                    <S.KeywordBox>
                        <span>Dummy Data...</span>
                        <S.KeywordPlustButton>+</S.KeywordPlustButton>
                    </S.KeywordBox>
                    <S.KeywordBox>
                        <span>Dummy Data...</span>
                        <S.KeywordPlustButton>+</S.KeywordPlustButton>
                    </S.KeywordBox>
                </S.SearchContent>
            </S.SearchLikeSportForm>
            <S.ButtonWrapper>
                <Button
                    size="sm"
                    backgroundColor={theme.color.silver}
                    css={css`
                        color: ${theme.color.label};
                        border-radius: 10px;
                    `}
                    onClick={handleCancelModal}
                >
                    취소
                </Button>
                <Button
                    size="sm"
                    backgroundColor={theme.color.blue}
                    css={css`
                        color: ${theme.color.white};
                        border-radius: 10px;
                    `}
                    onClick={handleCancelModal}
                >
                    저장
                </Button>
            </S.ButtonWrapper>
        </S.LikeSportModal>
    );
};

export default LikeSportModal;
