import { useQuery } from '@tanstack/react-query';

import * as S from './SelectAreaBox.style';

import { getAreaInfos } from '@/apis/area';
import { STALE_TIME, CACHE_TIME } from '@/constants/time';
import { AreaType } from '@/types/place';

interface SelectAreaBoxProps {
    handlePlaceArea: (placeInfo: AreaType) => void;
}

const SelectAreaBox = ({ handlePlaceArea }: SelectAreaBoxProps) => {
    const { data: areaInfos } = useQuery(['areaInfos'], getAreaInfos, {
        staleTime: STALE_TIME,
        cacheTime: CACHE_TIME,
    });

    return (
        areaInfos && (
            <S.SelectAreaBox>
                {areaInfos.map((placeInfo: AreaType) => (
                    <S.Box
                        key={`placeInfoBox-${placeInfo.name}`}
                        onClick={() => handlePlaceArea(placeInfo)}
                    >
                        {placeInfo.name}
                    </S.Box>
                ))}
            </S.SelectAreaBox>
        )
    );
};

export default SelectAreaBox;
