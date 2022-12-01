import * as S from "./Header.style"

import I from '@/components/common/Icons'
import theme from "@/styles/theme";

const Header = () => (
    <S.Header>
        <I.Logo.Small />
        <S.Title>현재위치</S.Title>
        <S.Box>
            <I.Search fontSize={1.2} color={theme.color.white} />
            <I.Profile fontSize={1.2} color={theme.color.white} />
        </S.Box>
    </S.Header>
);

export default Header;
