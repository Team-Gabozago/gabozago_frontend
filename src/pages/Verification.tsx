import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { useIsLoggedIn } from '@/hooks/useIsLoggedIn';

const Verification = () => {
    const isLoggedIn = useIsLoggedIn();

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('accessToken')) return;

        navigate('/login');
    }, [isLoggedIn, navigate]);

    return <Outlet />;
};

export default Verification;
