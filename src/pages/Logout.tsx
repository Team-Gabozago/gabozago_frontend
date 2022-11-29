import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import LoadingSpinner from '@/components/common/LoadingSpinner';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // localstorage Remove Access_token
        localStorage.removeItem('accessToken');
        // removeCookie('refresh_token');
        navigate('/');
    }, [navigate]);

    return <LoadingSpinner size="large" />;
};

export default Logout;
