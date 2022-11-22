import { Link } from 'react-router-dom';

import * as S from './Profile.style';

const Profile = () => (
    <S.Profile>
        <S.ProfileImage
            src="https://m.c-star.co.kr/web/product/big/202106/6419caaaf3881fa5f58db26afc29cd70.jpg"
            alt="profile"
        />
        <S.ProfileContent>
            <S.ProfileDetail>
                <span>달팽이</span>
                <Link to="/mypage/edit">
                    <div>Edit</div>
                </Link>
            </S.ProfileDetail>
            <S.ProfileEmailText>jinlog9@gmail.com</S.ProfileEmailText>
        </S.ProfileContent>
    </S.Profile>
);

export default Profile;
