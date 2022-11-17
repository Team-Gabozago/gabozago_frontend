import { Link } from 'react-router-dom';

import * as S from './Footer.style';

import Button from '@/components/common/Button';
import theme from '@/styles/theme';

const Footer = () => (
    <S.Footer>
        <Link to="/home">
            <Button size="xs" backgroundColor={theme.color.gray}>홈</Button>
        </Link>
        <Link to="/like">
            <Button size="xs" backgroundColor={theme.color.gray}>관심운동</Button>
        </Link>
        <Link to="/search">
            <Button size="xs" backgroundColor={theme.color.gray}>장소탐색</Button>
        </Link>
        <Link to="/mypage">
            <Button size="xs" backgroundColor={theme.color.gray}>마이페이지</Button>
        </Link>
    </S.Footer>
)

export default Footer;