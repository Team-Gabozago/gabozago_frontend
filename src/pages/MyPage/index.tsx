import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import * as S from './MyPage.style';

import { getMyPage } from '@/apis/mypage';
import Button from '@/components/common/Button';
import Footer from '@/components/common/Footer';
import Header from '@/components/MyPage/Header';
import LikeSport from '@/components/MyPage/LikeSport';
import Profile from '@/components/MyPage/Profile';
import { userState } from '@/recoil/atoms/user';
import theme from '@/styles/theme';

const MyPage = () => {
    const { data: me } = useQuery(['myPage'], getMyPage);
    const setUser = useSetRecoilState(userState);

    if (me === 403) {
        return <div>Error Page...</div>;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (me) {
            setUser({
                id: me.id,
                email: me.email,
                nickname: me.nickname,
                profile_image: me.profille_image,
            });
        }
    }, [me, setUser]);

    return (
        me && (
            <S.MyPage>
                <Header title="마이페이지" />
                <Profile me={me} />
                <LikeSport categories={me.categories} />
                <S.Box>
                    <Link to="/mypage/password">
                        <S.MoveText>비밀번호 변경</S.MoveText>
                    </Link>
                </S.Box>
                <S.Box>
                    <Link to="/mypage/board">
                        <S.MoveText>내가 쓴 글</S.MoveText>
                    </Link>
                </S.Box>
                <S.Box>
                    <Link to="/mypage/like">
                        <S.MoveText>관심 보낸 글</S.MoveText>
                    </Link>
                </S.Box>
                <S.ButtonWrapper>
                    <Link to="/logout">
                        <Button
                            size="md"
                            css={css`
                                border: 1px solid ${theme.color.gray};
                                margin-top: 1.75rem;
                            `}
                        >
                            로그아웃
                        </Button>
                    </Link>
                </S.ButtonWrapper>

                <S.MoveText
                    css={css`
                        color: ${theme.color.lightGray};
                        margin-top: 6.6rem;
                    `}
                >
                    <Link to="/mypage/secession">탈퇴하기</Link>
                </S.MoveText>

                <Footer />
            </S.MyPage>
        )
    );
};

export default MyPage;
