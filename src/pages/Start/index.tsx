import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './Start.style';

import Button from '@/components/common/Button';
import Logo from '@/components/common/Icons/modules/Logo';
import { startSports } from '@/constants/sports';
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
            {isLogo ? (
                <S.LogoWrapper>
                    <Logo.Big />
                </S.LogoWrapper>
            ) : (
                <S.StartWrapper>
                    <S.TitleWrppaer>
                        <S.Title>동료는</S.Title>
                        <S.Title>WANTU가 모을게,</S.Title>
                        <S.Title data-id="like">
                            <S.SportWrapper>
                                <S.SportUL>
                                    {startSports.map(sport => (
                                        <S.SportLI key={sport.id}>
                                            {sport.name}
                                            {sport.emoji}
                                        </S.SportLI>
                                    ))}
                                    <S.SportLI>
                                        {startSports[0].name}
                                        {startSports[0].emoji}
                                    </S.SportLI>
                                </S.SportUL>
                            </S.SportWrapper>
                        </S.Title>
                        <S.Title>누가 할래?</S.Title>
                    </S.TitleWrppaer>
                    <S.ButtonWrapper>
                        <Link to="/signup">
                            <Button
                                size="md"
                                backgroundColor={theme.color.gray}
                                backgroundImage={theme.color.gradient}
                            >
                                시작하기
                            </Button>
                        </Link>
                        <Link to="/login">
                            <Button
                                size="md"
                                backgroundColor={theme.color.bodyBackground}
                            >
                                이미 계정이 있나요? 로그인
                            </Button>
                        </Link>
                    </S.ButtonWrapper>
                </S.StartWrapper>
            )}
        </>
    );
};

export default StartPage;
