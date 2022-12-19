import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Verification = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // 만료된 토큰 확인?
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken) return;

        navigate('/');
    }, [navigate]);

    return <Outlet />;
};

export default Verification;
