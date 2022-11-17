import { Outlet } from 'react-router-dom';

import * as S from './Layout.style';

const Layout = () => (
    <S.Layout>
        <Outlet />
    </S.Layout>
);

export default Layout;
