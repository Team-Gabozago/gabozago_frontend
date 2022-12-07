
import React, { Dispatch, SetStateAction, useState } from "react";

import * as S from './Form.style';

import GlobalModal from "@/components/GlobalModal";
import { SearchPlace } from '@/interfaces/place';
import { PlaceType } from '@/types/place';


interface SelectPlaceBoxProps {
    setPlace: Dispatch<SetStateAction<{
        name: string;
        longitude: number;
        latitude: number;
    }>>
}

declare global {
    interface Window {
        kakao: any;
    }
}

const { kakao } = window;

const defaultCoords = { lat: 37.491583, lng: 127.031352 };

const SelectPlaceBox = ({ setPlace }: SelectPlaceBoxProps) => {
    const [isModal, setIsModal] = useState(true);
    const [searchPlaceText, setSearchPlaceText] = useState('');
    const [placeInfos, setPlaceInfos] = useState<PlaceType[]>([]);
    const [clickedPlace, setClickedPlace] = useState<PlaceType>({ place_id: 0, name: '', address: '', latitude: 0, longitude: 0 });

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
            location: new kakao.maps.LatLng(defaultCoords.lng, defaultCoords.lat),
        });
    };

    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchPlaceText(e.target.value);
    }

    const handlePlaceInfo = (place: PlaceType) => {
        setClickedPlace(place);
    }

    const handleSubmit = () => {
        if (clickedPlace) {
            setPlace({
                name: `${clickedPlace.address} ${clickedPlace.name}`,
                latitude: clickedPlace.latitude,
                longitude: clickedPlace.longitude
            });
        }
        setIsModal(false);
    }

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>{
            isModal &&
            <GlobalModal size="large" handleCancelClick={() => setIsModal(false)}>
                <S.SearchModalContent>
                    <S.SearchHeader>
                        <S.SearchInput value={searchPlaceText} placeholder="운동 장소를 검색해 보세요" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeSearch(e)} />
                        <S.SearchButton onClick={() => searchAddressToCoordinate(searchPlaceText)}>찾기</S.SearchButton>
                    </S.SearchHeader>
                    <S.SearchContent>
                        {placeInfos.map((placeInfo: PlaceType) => <S.PlaceInfo clickedPlace={clickedPlace.place_id === placeInfo.place_id} onClick={() => handlePlaceInfo(placeInfo)}>{placeInfo.address} {placeInfo.name}</S.PlaceInfo>)}
                    </S.SearchContent>
                    <S.SubmitButton type="submit" onClick={handleSubmit}>선택</S.SubmitButton>
                </S.SearchModalContent>
            </GlobalModal>
        }</>
    )
}

export default SelectPlaceBox;