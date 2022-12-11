import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";

import * as S from "./Header.style"

import { getAreaInfos } from "@/apis/area";
import I from '@/components/common/Icons'
import SelectPlaceBox from "@/components/Feed/Form/SelectPlaceBox";
import GlobalModal from "@/components/GlobalModal";
import theme from "@/styles/theme";

const Header = () => {
    const { data: areaInfos, refetch: refetchArea } = useQuery(['areaInfos'], getAreaInfos);
    const [place, setPlace] = useState({ name: '동네설정', longitude: 0, latitude: 0 });
    const [isModal, setIsModal] = useState(false);

    return (
        <>
            <S.Header>
                <I.Logo.Small />
                <S.Title onClick={() => setIsModal(true)}>{place.name} <I.ArrowDown fontSize={0.5} color={theme.color.greenSpeech} /></S.Title>
                <S.Box>
                    <Link to="/mypage">
                        <I.Profile fontSize={1.2} color={theme.color.white} />
                    </Link>
                </S.Box>
            </S.Header>
            {isModal &&
                <GlobalModal size="large" handleCancelClick={() => setIsModal(false)}>
                    <SelectPlaceBox setPlace={setPlace} setIsSelectBoxModal={setIsModal} />
                </GlobalModal>
            }
        </>
    )
}

export default Header;
