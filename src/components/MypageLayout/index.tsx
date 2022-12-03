import { Outlet } from 'react-router-dom';

import * as S from './MypageLayout.style';

import Footer from '@/components/common/Footer';

const MypageLayout = () => (
    <>
        <S.MypageLayout>
            <Outlet />
        </S.MypageLayout>
        <Footer />
    </>
);

export default MypageLayout;
