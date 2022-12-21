import { useNavigate } from 'react-router-dom';

import I from '@/components/common/Icons';
import theme from '@/styles/theme';

interface MyPageHeaderProps {
    title: string;
}

const Header = ({ title = '' }: MyPageHeaderProps) => {
    const navigate = useNavigate();

    return (
        <header className="h-[3.875rem] flex items-center p-4 border-b-1 border-solid border-darkGray text-white bg-navy text-center">
            <button
                type="button"
                className="cursor-pointer"
                onClick={() => navigate(-1)}
            >
                <I.BackButton color={theme.color.lightGray} fontSize={1} />
            </button>
            <h1 className="m-auto">{title}</h1>
        </header>
    );
};

export default Header;
