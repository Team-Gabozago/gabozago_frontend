import { Dispatch, SetStateAction, useState } from 'react';

import * as S from './Form.style';

import I from '@/components/common/Icons'

interface SelectSportBoxProps {
    setSelectSport: Dispatch<SetStateAction<boolean>>;
    setSport: (name: SetStateAction<string>) => void
}

const SelectSportBox = ({ setSelectSport, setSport }: SelectSportBoxProps) => {
    const [clickedSportIdx, setClickedSportIdx] = useState(0);
    const sportCategories = [
        { id: 1, name: '당구' },
        { id: 2, name: '러닝' },
        { id: 3, name: '배드민턴' },
        { id: 4, name: '볼링' },
        { id: 5, name: '수영' },
        { id: 6, name: '자전거' },
        { id: 7, name: '족구' },
        { id: 8, name: '축구' },
        { id: 9, name: '배구' }];

    const handleClickCategory = (category: { id: number, name: string }) => {
        setClickedSportIdx(category.id);
        setTimeout(() => {
            setSelectSport(false);
            setSport(category.name);
        }, 500);
    }
    return (
        <S.SelectSportWrapper>
            <S.SelectSportUl>
                {sportCategories.map((category) => <S.SelectSportLi key={`sport-${category.id}`} onClick={() => handleClickCategory(category)}><S.CheckBox clickedSport={clickedSportIdx === category.id}><I.Check fontSize={0.1} /></S.CheckBox>{category.name}</S.SelectSportLi>)}
            </S.SelectSportUl>
        </S.SelectSportWrapper>
    )
}

export default SelectSportBox;