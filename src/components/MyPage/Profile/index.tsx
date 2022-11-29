import { Link } from 'react-router-dom';

import * as S from './Profile.style';

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
    <S.Profile>
        <S.ProfileImage src={me.profile_image} alt="profile" />
        <S.ProfileContent>
            <S.ProfileDetail>
                <span>{me.nickname}</span>
                <Link to="/mypage/edit">
                    <I.Edit color={theme.color.gray} />
                </Link>
            </S.ProfileDetail>
            <S.ProfileEmailText>{me.email}</S.ProfileEmailText>
        </S.ProfileContent>
    </S.Profile>
);

export default Profile;
