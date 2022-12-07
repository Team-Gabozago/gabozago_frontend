import * as S from './Profile.style';

import { FeedProfileType } from '@/types/feed'
import { calculateDate } from '@/utils/date';

interface FeedProfileProps {
    author: FeedProfileType,
    updatedAt: string
}

const FeedProfile = ({ author, updatedAt }: FeedProfileProps) => (
    author && <S.ProfileContainer>
        <S.ProfileImg
            src={author.path}
            alt="프로필 이미지"
        />
        <S.ProfileContent>
            <span>{author.nickname}</span>
            <S.ProfileSubText>{calculateDate(updatedAt)}</S.ProfileSubText>
        </S.ProfileContent>
    </S.ProfileContainer>
);

export default FeedProfile;
