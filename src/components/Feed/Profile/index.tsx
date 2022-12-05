import * as S from './Profile.style';

const FeedProfile = () => (
    <S.ProfileContainer>
        <S.ProfileImg
            src={process.env.GABOZAGO_DEFAULT_IMAGE}
            alt="프로필 이미지"
        />
        <S.ProfileContent>
            <span>달팽이</span>
            <S.ProfileSubText>11.10</S.ProfileSubText>
        </S.ProfileContent>
    </S.ProfileContainer>
);

export default FeedProfile;
