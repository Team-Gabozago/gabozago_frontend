import { css } from '@emotion/react';
import { useMutation } from '@tanstack/react-query';

import * as S from './LikeSportModal.style';

import { deleteSport, patchSport } from '@/apis/sport';
import Button from '@/components/common/Button';
import I from '@/components/common/Icons';
import {
    SUCCESS_FAVORITE_DELETED,
    SUCCESS_FAVORITE_UPDATED,
} from '@/constants/code';
import { LikeSportCategory } from '@/interfaces/sport';
import theme from '@/styles/theme';

interface LikeSportModalProps {
    likeSports: LikeSportCategory[];
    handleCancelModal: () => void;
    refetchMyPage: () => void;
}

const LikeSportModal = ({
    likeSports,
    handleCancelModal,
    refetchMyPage,
}: LikeSportModalProps) => {
    const filteredSports = likeSports.filter(
        (sport: LikeSportCategory) => sport.favorite
    );

    const searchSports = likeSports.filter(
        (sport: LikeSportCategory) => !sport.favorite
    );

    const fetchDeleteSport = useMutation(deleteSport, {
        onSuccess: (code: string) => {
            if (code === SUCCESS_FAVORITE_DELETED) {
                handleCancelModal();
                refetchMyPage();
            }
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const fetchPatchSport = useMutation(patchSport, {
        onSuccess: (code: string) => {
            if (code === SUCCESS_FAVORITE_UPDATED) {
                handleCancelModal();
                refetchMyPage();
            }
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const handleDeleteSport = (id: number) => {
        fetchDeleteSport.mutate(id);
    };

    const handlePatchSport = (id: number) => {
        fetchPatchSport.mutate(id);
    };

    return (
        <S.LikeSportModal>
            <S.Title>관심 운동 추가/삭제</S.Title>
            <S.CurrentLikeSport>
                <S.SubTitle>현재 관심 운동</S.SubTitle>
                <S.SportWrapper>
                    {filteredSports.map(sport => (
                        <S.SportTag
                            id={`tag-${sport.id}`}
                            key={`tag-${sport.id}`}
                        >
                            {sport.name}
                            <S.SportMinusButton
                                type="button"
                                onClick={() => handleDeleteSport(sport.id)}
                            >
                                -
                            </S.SportMinusButton>
                        </S.SportTag>
                    ))}
                    {filteredSports.length === 0 && (
                        <S.SubTitle>관심운동을 추가해주세요.</S.SubTitle>
                    )}
                </S.SportWrapper>
            </S.CurrentLikeSport>
            <S.SearchLikeSportForm>
                <S.SubTitle>다른 운동 선택</S.SubTitle>
                <S.SearchContent>
                    {searchSports.map((sport: LikeSportCategory) => (
                        <S.KeywordBox key={sport.id}>
                            <S.KeywordText>{sport.name}</S.KeywordText>
                            <S.KeywordPlustButton
                                type="button"
                                onClick={() => handlePatchSport(sport.id)}
                            >
                                +
                            </S.KeywordPlustButton>
                        </S.KeywordBox>
                    ))}
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
