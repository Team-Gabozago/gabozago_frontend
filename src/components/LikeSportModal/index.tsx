import { css } from '@emotion/react';
import { useMutation } from '@tanstack/react-query';

import { deleteSport, patchSport } from '@/apis/sport';
import Button from '@/components/common/Button';
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
        <div className="h-full flex flex-col items-center pt-8 px-7 pb-5">
            <h1 className="mb-7 text-md font-weight text-navy">
                관심 운동 추가/삭제
            </h1>
            <div className="h-16 flex flex-col text-center mb-5">
                <h4 className="text-xs font-weight mb-3 text-lightNavy">
                    현재 관심 운동
                </h4>
                <div className="flex gap-2 relative">
                    {filteredSports.map(sport => (
                        <div
                            className="max-w-[4.25rem] h-7 flex items-center relative rounded-2xl px-2 py-3 text-xs border-[1px] border-solid border-gray"
                            id={`tag-${sport.id}`}
                            key={`tag-${sport.id}`}
                        >
                            {sport.name}
                            <button
                                type="button"
                                className="w-3 h-3 flex justify-center items-center absolute top-[-3px] right-[-3px] rounded-full text-white bg-gray cursor-pointer"
                                onClick={() => handleDeleteSport(sport.id)}
                            >
                                -
                            </button>
                        </div>
                    ))}
                    {filteredSports.length === 0 && (
                        <h4 className="text-xs font-weight mb-3 text-lightNavy">
                            관심운동을 추가해주세요.
                        </h4>
                    )}
                </div>
            </div>
            <form className="flex flex-col mb-7 text-center">
                <h4 className="text-xs font-weight mb-3 text-lightNavy">
                    다른 운동 선택
                </h4>
                <div className="w-[16.625rem] h-32 overflow-y-auto">
                    {searchSports.map((sport: LikeSportCategory) => (
                        <div
                            className="h-8 flex justify-between items-center px-4 py-2.5 border-b-[1px] border-solid border-silver"
                            key={sport.id}
                        >
                            <span className="text-xs">{sport.name}</span>
                            <button
                                type="button"
                                className="w-6 h-6 rounded-full text-white bg-gray"
                                onClick={() => handlePatchSport(sport.id)}
                            >
                                +
                            </button>
                        </div>
                    ))}
                </div>
            </form>
            <div className="flex gap-4 mt-auto">
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
            </div>
        </div>
    );
};

export default LikeSportModal;
