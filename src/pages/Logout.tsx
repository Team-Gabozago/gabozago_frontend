import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import LoadingSpinner from '@/components/common/LoadingSpinner';
import { userState } from '@/recoil/atoms/user';

const Logout = () => {
    const navigate = useNavigate();
    const setUser = useSetRecoilState(userState);

    useEffect(() => {
        // localstorage Remove Access_token
        localStorage.removeItem('accessToken');
        setUser([]);
        // removeCookie('refresh_token');
        navigate('/');
    }, [navigate, setUser]);

    return <LoadingSpinner size="large" />;
};

export default Logout;
