import * as S from './Navigation.style';

import I from '@/components/common/Icons';
import theme from "@/styles/theme";

interface NavigationProps {
    clickedValue: string;
    handleNaviLi: (value: string) => void;
}

const Navigation = ({ clickedValue, handleNaviLi }: NavigationProps) => (
    <S.Navigation>
        <S.NaviUL>
            <S.NaviLi clickedValue={clickedValue === 'NEWEST'} onClick={() => handleNaviLi('NEWEST')}>
                <S.NaviText>최신순</S.NaviText>
                {clickedValue && <S.NaviBorder clickedValue={clickedValue === 'NEWEST'} />}
            </S.NaviLi>
            <S.NaviLi clickedValue={clickedValue === 'LIKE'} onClick={() => handleNaviLi('LIKE')}>
                <I.Heart color={clickedValue === 'LIKE' ? theme.color.greenSpeech : theme.color.lightNavy}
                    fontSize={0.5}
                />
                <S.NaviText>많은순</S.NaviText>
                {clickedValue && <S.NaviBorder clickedValue={clickedValue === 'LIKE'} />}
            </S.NaviLi>
        </S.NaviUL>
    </S.Navigation>
)

export default Navigation;