import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { useIsLoggedIn } from '@/hooks/useIsLoggedIn';

const Verification = () => {
    const isLoggedIn = useIsLoggedIn();

    const navigate = useNavigate();

    useEffect(() => {
        // 만료된 토큰 확인?
        if (isLoggedIn) return;

        navigate('/login');
    }, [isLoggedIn, navigate]);

    return <Outlet />;
};

export default Verification;
