import { NavLink } from 'react-router-dom';

import * as S from './footer.style';

import I from '@/components/common/Icons';
import theme from '@/styles/theme';

const Footer = () => (
    <S.Footer>
        <S.LinkUl>
            <li>
                <NavLink to="/home">
                    <I.Home color={theme.color.silver} fontSize={1.2} />
                </NavLink>
            </li>
            <li>
                <NavLink to="/like">
                    <I.Heart color={theme.color.silver} fontSize={1.2} />
                </NavLink>
            </li>
            <li>
                <NavLink to="/mypage">
                    <I.Profile color={theme.color.silver} fontSize={1.2} />
                </NavLink>
            </li>
        </S.LinkUl>
    </S.Footer>
);

export default Footer;
