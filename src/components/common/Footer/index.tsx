import { Link, NavLink } from 'react-router-dom';

import * as S from './footer.style';

const Footer = () => (
    <S.Footer>
        <S.LinkUl>
            <li>
                <NavLink to="/">홈</NavLink>
            </li>
            <li>
                <NavLink to="/">관심운동</NavLink>
            </li>
            <li>
                <NavLink to="/">장소탐색</NavLink>
            </li>
            <li>
                <NavLink to="/">마이페이지</NavLink>
            </li>
        </S.LinkUl>
    </S.Footer>
);

export default Footer;
