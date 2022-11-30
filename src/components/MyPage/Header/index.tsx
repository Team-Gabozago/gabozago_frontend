import { useNavigate } from 'react-router-dom';

import * as S from './Header.style';

import I from '@/components/common/Icons';
import theme from '@/styles/theme';

interface MyPageHeaderProps {
    title: string;
}

const Header = ({ title = '' }: MyPageHeaderProps) => {
    const navigate = useNavigate();

    return (
        <S.Header>
            <S.BackButtonWrapper onClick={() => navigate(-1)}>
                <I.BackButton color={theme.color.lightGray} fontSize={1} />
            </S.BackButtonWrapper>
            <S.Title>{title}</S.Title>
        </S.Header>
    );
};

export default Header;
