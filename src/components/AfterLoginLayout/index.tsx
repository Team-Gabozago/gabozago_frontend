import { Outlet } from 'react-router-dom';

import * as S from './AfterLoginLayout.style';

import Footer from '@/components/common/Footer';

const AfterLoginLayout = () => (
    <>
        <S.AfterLoginLayout>
            <Outlet />
        </S.AfterLoginLayout>
        <Footer />
    </>
);

export default AfterLoginLayout;
