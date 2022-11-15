import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './Start.style';

import Button from '@/components/common/Button';
import Logo from '@/components/common/Icons/modules/Logo';
import { sports } from '@/constants/sports'
import theme from '@/styles/theme';

const StartPage = () => {
    const [isLogo, setIsLogo] = useState(true);

    useEffect(() => {
        // TODO: Logo가 사라질때 animation 줘보기?
        (async () => {
            setTimeout(() => {
                setIsLogo(false);
            }, 1000);
        })();
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {isLogo ? <S.LogoWrapper>
                <Logo.Big />
            </S.LogoWrapper>
                :
                <S.StartWrapper>
                    <S.TitleWrppaer>
                        <S.TitleText>동료는</S.TitleText>
                        <S.TitleText>WANTU가 모을게,</S.TitleText>
                        <S.TitleText data-id="like">
                            {sports.map((sport) => <div key={sport.id}>{sport.name}{sport.emoji}</div>)}
                        </S.TitleText>
                        <S.TitleText>누가 할래?</S.TitleText>
                    </S.TitleWrppaer>
                    <S.ButtonWrapper>
                        <Link to="/signup">
                            <Button size="md" backgroundColor={theme.color.gray}>시작하기</Button>
                        </Link>
                        <Link to="/login">
                            <Button size="md" backgroundColor={theme.color.bodyBackground}>이미 계정이 있나요? 로그인</Button>
                        </Link>
                    </S.ButtonWrapper>
                </S.StartWrapper>
            }
        </>
    )
}

export default StartPage;