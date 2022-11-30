import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import * as S from './MyPage.style';

import { getMyPage } from '@/apis/mypage';
import Button from '@/components/common/Button';
import Footer from '@/components/common/Footer';
import I from '@/components/common/Icons';
import Header from '@/components/MyPage/Header';
import LikeSport from '@/components/MyPage/LikeSport';
import Profile from '@/components/MyPage/Profile';
import { UNAUTHENTICATED, PROFILE_FETCHED } from '@/constants/code';
import { userState } from '@/recoil/atoms/user';
import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

const MyPage = () => {
    const [clickedArrow, setClickedArrow] = useState(false);
    const { data: me, refetch: refetchMyPage } = useQuery(
        ['myPage'],
        getMyPage
    );
    const setUser = useSetRecoilState(userState);

    if (me === UNAUTHENTICATED) {
        return <div>Error Page...</div>;
    }

    const handleMyWrite = () => {
        setClickedArrow(!clickedArrow);
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (me && me.code === PROFILE_FETCHED) {
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
                <LikeSport
                    categories={me.categories}
                    refetchMyPage={refetchMyPage}
                />
                <S.Box>
                    <Link to="/mypage/password">
                        <S.MoveText>비밀번호 변경</S.MoveText>
                    </Link>
                </S.Box>
                <S.Box>
                    <S.MyWriteContent onClick={handleMyWrite}>
                        <S.MoveText>내가 쓴 글</S.MoveText>
                        {clickedArrow ? (
                            <I.ArrowUp fontSize={0.2} />
                        ) : (
                            <I.ArrowDown fontSize={0.2} />
                        )}
                    </S.MyWriteContent>
                </S.Box>
                {clickedArrow && (
                    <S.MoveSubContent>
                        <Link to="/mypage/board">
                            <S.MoveText
                                css={css`
                                    ${flexbox({ ai: 'center' })};
                                    height: 5rem;
                                    margin-left: 1rem;
                                    color: ${theme.color.label};
                                `}
                            >
                                게시글
                            </S.MoveText>
                        </Link>
                        <Link to="/mypage/comment">
                            <S.MoveText
                                css={css`
                                    ${flexbox({ ai: 'center' })};
                                    height: 5rem;
                                    margin-left: 1rem;
                                    color: ${theme.color.label};
                                `}
                            >
                                댓글 / 답글
                            </S.MoveText>
                        </Link>
                    </S.MoveSubContent>
                )}
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
