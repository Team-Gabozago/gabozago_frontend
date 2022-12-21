import { Dispatch, SetStateAction, useState } from 'react';

import I from '@/components/common/Icons';
import theme from '@/styles/theme';
import { CategoryType } from '@/types/sport';

interface SelectSportBoxProps {
    sportCategories: { id: number; name: string }[];
    setSelectSport: Dispatch<SetStateAction<boolean>>;
    setSport: Dispatch<SetStateAction<CategoryType>>;
}

const SelectSportBox = ({
    sportCategories,
    setSelectSport,
    setSport,
}: SelectSportBoxProps) => {
    const [clickedSportIdx, setClickedSportIdx] = useState(0);

    const handleClickCategory = (category: CategoryType) => {
        setClickedSportIdx(category.id);
        setTimeout(() => {
            setSelectSport(false);
            setSport({ id: category.id, name: category.name });
        }, 500);
    };

    return (
        <div className="w-[20.375rem] h-[22rem] absolute top-40 p-6 bg-lightSilver rounded-lg z-[999] overflow-y-auto">
            <ul>
                {sportCategories &&
                    sportCategories.map((category: CategoryType) => (
                        <li
                            aria-hidden="true"
                            className="flex items-center gap-2 px-3 py-4 border-b-[1px] border-solid border-silver cursor-pointer"
                            key={`sport-${category.id}`}
                            onClick={() => handleClickCategory(category)}
                        >
                            <div
                                className={`w-4 h-4 flex justify-center items-center border-[1px] border-solid border-gray rounded-full
                                ${
                                    clickedSportIdx === category.id
                                        ? 'text-white bg-navy'
                                        : 'text-gray bg-lightSilver'
                                }`}
                            >
                                <I.Check
                                    fontSize={0.4}
                                    color={
                                        clickedSportIdx === category.id
                                            ? theme.color.white
                                            : theme.color.gray
                                    }
                                />
                            </div>
                            <span className="text-xs">{category.name}</span>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default SelectSportBox;
