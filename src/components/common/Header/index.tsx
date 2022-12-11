import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './Header.style';

import { postAreaInfo } from '@/apis/area';
import I from '@/components/common/Icons';
import SelectAreaBox from '@/components/common/SelectAreaBox';
import Overlayout from '@/components/OverLayout';
import { MyAreaInfo } from '@/interfaces/area';
import theme from '@/styles/theme';
import { AreaType } from '@/types/place';

interface HeaderProps {
    myArea: MyAreaInfo;
    refetchMyArea: () => void;
}

const Header = ({ myArea, refetchMyArea }: HeaderProps) => {
    const [isAreaBox, setIsAreaBox] = useState(false);
    const [place, setPlace] = useState<AreaType>({
        name: '동네설정',
        longitude: 0,
        latitude: 0,
    });

    const fetchPostAreaInfo = useMutation(postAreaInfo, {
        onSuccess: async (ok: boolean) => {
            if (ok) {
                refetchMyArea();
                setIsAreaBox(false);
            }
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const handlePlaceArea = (placeInfo: AreaType) => {
        setPlace(placeInfo);
        fetchPostAreaInfo.mutate(placeInfo);
    };

    useEffect(() => {
        if (myArea) {
            setPlace({
                name: myArea.region2depth_name,
                longitude: myArea.x,
                latitude: myArea.y,
            });
        }
    }, [myArea]);

    return (
        <>
            <S.Header>
                <I.Logo.Small />
                <S.Title onClick={() => setIsAreaBox(!isAreaBox)}>
                    {place.name}{' '}
                    <I.ArrowDown
                        fontSize={0.5}
                        color={theme.color.greenSpeech}
                    />
                </S.Title>
                <S.Box>
                    <Link to="/mypage">
                        <I.Profile fontSize={1.2} color={theme.color.white} />
                    </Link>
                </S.Box>
            </S.Header>
            {isAreaBox && (
                <>
                    <Overlayout handleCancelClick={() => setIsAreaBox(false)} />
                    <SelectAreaBox handlePlaceArea={handlePlaceArea} />
                </>
            )}
        </>
    );
};

export default Header;
