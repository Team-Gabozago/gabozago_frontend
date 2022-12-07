import { useQuery } from '@tanstack/react-query';
import { Dispatch, SetStateAction, useState } from 'react';

import * as S from './Form.style';

import { getCategories } from '@/apis/feeds';
import I from '@/components/common/Icons';
import theme from '@/styles/theme';
import { CategoryType } from '@/types/sport';

interface SelectSportBoxProps {
    setSelectSport: Dispatch<SetStateAction<boolean>>;
    setSport: Dispatch<SetStateAction<CategoryType>>;
}

const SelectSportBox = ({ setSelectSport, setSport }: SelectSportBoxProps) => {
    const [clickedSportIdx, setClickedSportIdx] = useState(0);
    const { data: sportCategories } = useQuery(['categories'], getCategories);

    const handleClickCategory = (category: CategoryType) => {
        setClickedSportIdx(category.id);
        setTimeout(() => {
            setSelectSport(false);
            setSport({ id: category.id, name: category.name });
        }, 500);
    };
    return (
        <S.SelectSportWrapper>
            <S.SelectSportUl>
                {sportCategories &&
                    sportCategories.map((category: CategoryType) => (
                        <S.SelectSportLi
                            key={`sport-${category.id}`}
                            onClick={() => handleClickCategory(category)}
                        >
                            <S.CheckBox
                                clickedSport={clickedSportIdx === category.id}
                            >
                                <I.Check
                                    fontSize={0.4}
                                    color={
                                        clickedSportIdx === category.id
                                            ? theme.color.white
                                            : theme.color.gray
                                    }
                                />
                            </S.CheckBox>
                            {category.name}
                        </S.SelectSportLi>
                    ))}
            </S.SelectSportUl>
        </S.SelectSportWrapper>
    );
};

export default SelectSportBox;
