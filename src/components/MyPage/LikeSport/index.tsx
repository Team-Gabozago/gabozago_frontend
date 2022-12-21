import { useState } from 'react';

import LikeSportModal from '../../LikeSportModal';

import GlobalModal from '@/components/GlobalModal';
import { LikeSportCategory } from '@/interfaces/sport';

interface LikeSportProps {
    categories: LikeSportCategory[];
    refetchMyPage: () => void;
}

const LikeSport = ({ categories, refetchMyPage }: LikeSportProps) => {
    const [isSportModal, setIsSportModal] = useState(false);
    const handlePlusClick = () => {
        setIsSportModal(true);
    };

    return (
        <>
            <div className="flex flex-col gap-5 px-6 py-4 border-b-[1px] border-solid border-silver">
                <h1 className="text-sm text-lightBlack">관심 운동</h1>
                <div className="flex gap-2">
                    {categories &&
                        categories.map(
                            (category: LikeSportCategory) =>
                                category.favorite && (
                                    <div
                                        className="max-w-[3.75rem] flex justify-center items-center p-3 h-7 rounded-2xl text-xs border-[1px] border-solid border-gray truncate"
                                        key={category.id}
                                    >
                                        {category.name}
                                    </div>
                                )
                        )}
                    <button
                        type="button"
                        className="w-8 h-7 rounded-2xl text-white bg-gray"
                        onClick={handlePlusClick}
                    >
                        +
                    </button>
                </div>
            </div>
            {isSportModal && (
                <GlobalModal
                    size="medium"
                    handleCancelClick={() => setIsSportModal(false)}
                >
                    <LikeSportModal
                        likeSports={categories}
                        handleCancelModal={() => setIsSportModal(false)}
                        refetchMyPage={refetchMyPage}
                    />
                </GlobalModal>
            )}
        </>
    );
};

export default LikeSport;
