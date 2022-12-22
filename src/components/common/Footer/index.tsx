import { NavLink } from 'react-router-dom';

import I from '@/components/common/Icons';
import theme from '@/styles/theme';

const Footer = () => (
    <footer className="w-[23.4375rem] h-14 rounded-t-xl fixed bottom-0 bg-navy">
        <ul className="h-full flex items-center">
            <li className="flex-1 text-center">
                <NavLink to="/home">
                    <I.Home color={theme.color.silver} fontSize={1.2} />
                </NavLink>
            </li>
            <li className="flex-1 text-center">
                <NavLink to="/like">
                    <I.Heart color={theme.color.silver} fontSize={1.2} />
                </NavLink>
            </li>
            <li className="flex-1 text-center">
                <NavLink to="/mypage">
                    <I.Profile color={theme.color.silver} fontSize={1.2} />
                </NavLink>
            </li>
        </ul>
    </footer>
);

export default Footer;
