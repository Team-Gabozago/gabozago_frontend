import * as S from './profile.style';

import { IProfile } from '@/types/post';

interface IProfileProps {
    profile?: IProfile;
}

const Profile = ({ profile }: IProfileProps) => {
    if (!profile) return null;
    const { writer, time, profileImage } = profile; // api 나오는 거 보고 가공요청

    return (
        <S.ProfileContainer>
            <S.Image>{profileImage}</S.Image>
            <S.Writer>{writer}</S.Writer>
            <S.Time>{time}</S.Time>
        </S.ProfileContainer>
    );
};

export default Profile;
