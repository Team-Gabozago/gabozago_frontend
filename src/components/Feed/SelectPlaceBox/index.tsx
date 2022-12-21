import React, { useState } from 'react';

import { SearchPlace } from '@/interfaces/place';
import { AreaType, PlaceType } from '@/types/place';

interface SelectPlaceBoxProps {
    handlePlaceArea: (placeInfo: AreaType) => void;
    setIsSelectBoxModal: React.Dispatch<React.SetStateAction<boolean>>;
}

declare global {
    interface Window {
        kakao: any;
    }
}

const { kakao } = window;

const defaultCoords = { lat: 37.491583, lng: 127.031352 };

const SelectPlaceBox = ({
    handlePlaceArea,
    setIsSelectBoxModal,
}: SelectPlaceBoxProps) => {
    const [searchPlaceText, setSearchPlaceText] = useState('');
    const [placeInfos, setPlaceInfos] = useState<PlaceType[]>([]);
    const [clickedPlace, setClickedPlace] = useState<PlaceType>({
        place_id: 0,
        name: '',
        address: '',
        latitude: 0,
        longitude: 0,
    });

    const placesSearchCallBack = (data: SearchPlace[], status: string) => {
        if (status === kakao.maps.services.Status.OK) {
            const searchPlaceInfos = data.map((place: SearchPlace) => ({
                place_id: +place.id,
                name: place.place_name,
                address: place.address_name,
                latitude: +place.x,
                longitude: +place.y,
                detail_link: place.place_url,
            }));

            setPlaceInfos(searchPlaceInfos);
        }
        if (status === kakao.maps.services.Status.ZERO_RESULT) {
            // 검색 결과가 존재하지 않습니다.
        } else if (status === kakao.maps.services.Status.ERROR) {
            // 검색 결과 중 오류가 발생했습니다.
        }
    };

    const searchAddressToCoordinate = (address: string) => {
        const kakaoSearchService = new kakao.maps.services.Places();
        kakaoSearchService.keywordSearch(address, placesSearchCallBack, {
            location: new kakao.maps.LatLng(
                defaultCoords.lng,
                defaultCoords.lat
            ),
        });
    };

    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchPlaceText(e.target.value);
    };

    const handlePlaceInfo = (place: PlaceType) => {
        setClickedPlace(place);
    };

    const handleSubmit = () => {
        if (clickedPlace) {
            const newArea = {
                name: `${clickedPlace.address} ${clickedPlace.name}`,
                latitude: clickedPlace.latitude,
                longitude: clickedPlace.longitude,
            };
            handlePlaceArea(newArea);
        }
        setIsSelectBoxModal(false);
    };

    return (
        <div className="flex flex-col gap-4 p-8">
            <header className="flex gap-4">
                <input
                    className="w-[20.375rem] p-2 border-b-[1px] border-solid border-gray"
                    value={searchPlaceText}
                    placeholder="운동 장소를 검색해 보세요"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeSearch(e)
                    }
                />
                <button
                    type="button"
                    className="w-12 text-white bg-navy"
                    onClick={() => searchAddressToCoordinate(searchPlaceText)}
                >
                    찾기
                </button>
            </header>
            <div className="h-[30rem] overflow-y-auto">
                {placeInfos.map((placeInfo: PlaceType) => (
                    <div
                        aria-hidden="true"
                        className={`py-4 ${
                            clickedPlace.place_id === placeInfo.place_id
                                ? 'bg-silver'
                                : 'bg-white'
                        } cursor-pointer`}
                        key={`place-${placeInfo.place_id}`}
                        onClick={() => handlePlaceInfo(placeInfo)}
                    >
                        {placeInfo.address} {placeInfo.name}
                    </div>
                ))}
            </div>
            <button
                type="submit"
                className="w-40 h-8 rounded-lg m-auto text-white bg-navy"
                onClick={handleSubmit}
            >
                선택
            </button>
        </div>
    );
};

export default SelectPlaceBox;
