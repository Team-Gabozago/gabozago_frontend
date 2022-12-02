import { Outlet } from 'react-router-dom';

import * as S from './BeforeLoginLayout.style';

const BeforeLoginLayout = () => (
    <S.BeforeLoginLayout>
        <Outlet />
    </S.BeforeLoginLayout>
);

export default BeforeLoginLayout;
