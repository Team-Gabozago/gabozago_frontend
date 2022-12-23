import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getAreaInfos, postAreaInfo } from '@/apis/area';
import I from '@/components/common/Icons';
import SelectAreaBox from '@/components/common/SelectAreaBox';
import Overlayout from '@/components/OverLayout';
import { STALE_TIME, CACHE_TIME } from '@/constants/time';
import { MyAreaInfo } from '@/interfaces/area';
import theme from '@/styles/theme';
import { AreaType } from '@/types/place';

interface HeaderProps {
    myArea: MyAreaInfo;
    refetchMyArea?: () => void;
    refetchFeeds?: () => void;
}

const Header = ({ myArea, refetchMyArea, refetchFeeds }: HeaderProps) => {
    const [isAreaBox, setIsAreaBox] = useState(false);
    const [place, setPlace] = useState<AreaType>({
        name: '동네설정',
        longitude: 0,
        latitude: 0,
    });

    const { data: areaInfos } = useQuery(['areaInfos'], getAreaInfos, {
        staleTime: STALE_TIME,
        cacheTime: CACHE_TIME,
    });

    const fetchPostAreaInfo = useMutation(postAreaInfo, {
        onSuccess: async (ok: boolean) => {
            if (ok) {
                if (refetchMyArea) refetchMyArea();
                if (refetchFeeds) refetchFeeds();
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
                name: myArea.region2depth_name || '동네설정',
                longitude: myArea.x,
                latitude: myArea.y,
            });
        }
    }, [myArea]);

    return (
        <>
            <header className="w-80 flex justify-between items-center pt-5 pb-4 border-b border-solid border-lightNavy bg-navy">
                <Link to="/home">
                    <I.Logo.Small />
                </Link>
                <button
                    type="button"
                    className="flex items-center gap-2 text-white cursor-pointer"
                    onClick={() => setIsAreaBox(!isAreaBox)}
                >
                    {place.name}{' '}
                    <I.ArrowDown
                        fontSize={0.5}
                        color={theme.color.greenSpeech}
                    />
                </button>
                <div className="flex gap-4">
                    <Link to="/mypage">
                        <I.Profile fontSize={1.2} color={theme.color.white} />
                    </Link>
                </div>
            </header>
            {isAreaBox && (
                <>
                    <Overlayout handleCancelClick={() => setIsAreaBox(false)} />
                    <SelectAreaBox
                        handlePlaceArea={handlePlaceArea}
                        areaInfos={areaInfos}
                    />
                </>
            )}
        </>
    );
};

export default Header;
