import { Link } from 'react-router-dom';

import I from '@/components/common/Icons';
import { LikeSportCategory } from '@/interfaces/sport';
import theme from '@/styles/theme';

interface ProfileProps {
    id: number;
    email: string;
    nickname: string;
    profile_image: string;
    categories: LikeSportCategory[];
}

const Profile = ({ me }: { me: ProfileProps }) => (
    <div className="flex gap-4 p-4 border-b-[1px] border-solid border-silver">
        <img
            className="w-16 h-16 rounded-full bg-silver"
            src={me.profile_image}
            alt="profile"
        />
        <div className="flex flex-col justify-center gap-2">
            <div className="flex items-center gap-2">
                <span className="text-md">{me.nickname}</span>
                <Link to="/mypage/edit">
                    <I.Edit color={theme.color.gray} />
                </Link>
            </div>
            <span className="text-xs text-lightGray">{me.email}</span>
        </div>
    </div>
);

export default Profile;
