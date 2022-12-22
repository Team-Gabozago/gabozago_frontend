import I from '@/components/common/Icons';
import theme from '@/styles/theme';

interface NavigationProps {
    sortType: string;
    handleNaviLi: (value: string) => void;
}

const Navigation = ({ sortType, handleNaviLi }: NavigationProps) => (
    <nav className="mt-12 mb-3">
        <ul className="flex justify-between px-24">
            <li
                aria-hidden="true"
                className={`${
                    sortType === 'NEWEST'
                        ? 'text-greenSpeech'
                        : 'text-lightNavy'
                } text-xs cursor-pointer`}
                onClick={() => handleNaviLi('NEWEST')}
            >
                <span className="ml-1">최신순</span>
                {sortType === 'NEWEST' && (
                    <hr className="text-greenSpeech w-5 h-0.5 mt-2 mx-auto" />
                )}
            </li>
            <li
                aria-hidden="true"
                className={`${
                    sortType === 'LIKE' ? 'text-greenSpeech' : 'text-lightNavy'
                } text-xs cursor-pointer`}
                onClick={() => handleNaviLi('LIKE')}
            >
                <I.Heart
                    color={
                        sortType === 'LIKE'
                            ? theme.color.greenSpeech
                            : theme.color.lightNavy
                    }
                    fontSize={0.5}
                />
                <span className="ml-1">많은순</span>
                {sortType === 'LIKE' && (
                    <hr className="text-greenSpeech w-5 h-0.5 mt-2 mx-auto" />
                )}
            </li>
        </ul>
    </nav>
);

export default Navigation;
