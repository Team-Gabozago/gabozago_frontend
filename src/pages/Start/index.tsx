import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
        <section className="h-screen w-[23.4375rem] flex flex-col justify-between items-center pt-28 pb-8 bg-navy">
            {isLogo ? (
                <div className="h-screen flex flex-col justify-center items-center">
                    <Logo.Big />
                </div>
            ) : (
                <>
                    <div className="flex flex-col gap-6 px-10">
                        <div className="text-white text-display font-extrabold font-GangwonEduPower">
                            동료는
                        </div>
                        <div className="text-white text-display font-font-extrabold font-GangwonEduPower">
                            WANTU가 모을게,
                        </div>
                        <div data-id="like">
                            <div className="h-12 overflow-hidden">
                                <ul className="animate-rolling text-white text-display font-extrabold font-GangwonEduPower">
                                    {startSports.map(sport => (
                                        <li
                                            key={sport.id}
                                            className="h-4 flex items-center py-6"
                                        >
                                            {sport.name}
                                            {sport.emoji}
                                        </li>
                                    ))}
                                    <li className="h-4 flex items-center py-6">
                                        {startSports[0].name}
                                        {startSports[0].emoji}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-white text-display font-extrabold font-GangwonEduPower">
                            누가 할래?
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 py-6">
                        <Link to="/signup">
                            <Button
                                size="md"
                                backgroundColor={theme.color.gray}
                                backgroundImage={theme.color.gradient}
                            >
                                <span className="font-extrabold text-sm text-green">
                                    시작하기
                                </span>
                            </Button>
                        </Link>
                        <Link to="/login">
                            <Button
                                size="md"
                                backgroundColor={theme.color.transparent}
                            >
                                <span className="text-sm text-gray">
                                    이미 계정이 있나요? 로그인
                                </span>
                            </Button>
                        </Link>
                    </div>
                </>
            )}
        </section>
    );
};

export default StartPage;
