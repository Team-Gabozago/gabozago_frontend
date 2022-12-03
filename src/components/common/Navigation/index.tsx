import * as S from './Navigation.style';

import I from '@/components/common/Icons';
import theme from "@/styles/theme";

interface NavigationProps {
    sortType: string;
    handleNaviLi: (value: string) => void;
}

const Navigation = ({ sortType, handleNaviLi }: NavigationProps) => (
    <S.Navigation>
        <S.NaviUL>
            <S.NaviLi sortType={sortType === 'NEWEST'} onClick={() => handleNaviLi('NEWEST')}>
                <S.NaviText>최신순</S.NaviText>
                {sortType && <S.NaviBorder sortType={sortType === 'NEWEST'} />}
            </S.NaviLi>
            <S.NaviLi sortType={sortType === 'LIKE'} onClick={() => handleNaviLi('LIKE')}>
                <I.Heart color={sortType === 'LIKE' ? theme.color.greenSpeech : theme.color.lightNavy}
                    fontSize={0.5}
                />
                <S.NaviText>많은순</S.NaviText>
                {sortType && <S.NaviBorder sortType={sortType === 'LIKE'} />}
            </S.NaviLi>
        </S.NaviUL>
    </S.Navigation>
)

export default Navigation;