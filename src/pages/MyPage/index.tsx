import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { getMyPage } from '@/apis/mypage';
import Button from '@/components/common/Button';
import I from '@/components/common/Icons';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import Header from '@/components/MyPage/Header';
import LikeSport from '@/components/MyPage/LikeSport';
import Profile from '@/components/MyPage/Profile';
import { UNAUTHENTICATED, PROFILE_FETCHED } from '@/constants/code';
import { userState } from '@/recoil/atoms/user';
import theme from '@/styles/theme';

const MyPage = () => {
    const [clickedArrow, setClickedArrow] = useState(false);
    const {
        data: me,
        isLoading,
        refetch: refetchMyPage,
    } = useQuery(['myPage'], getMyPage);

    const setUser = useSetRecoilState(userState);

    if (me && me.code === UNAUTHENTICATED) {
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
                profile_image: me.profile_image,
            });
        }
    }, [me, setUser]);

    if (isLoading) return <LoadingSpinner size="large" />;

    return (
        me && (
            <section className="pb-[5rem]">
                <Header title="마이페이지" />
                <Profile me={me} />
                <LikeSport
                    categories={me.categories}
                    refetchMyPage={refetchMyPage}
                />
                <div className="h-20 flex items-center border-b border-solid border-silver">
                    <Link to="/mypage/password">
                        <span className="px-4">비밀번호 변경</span>
                    </Link>
                </div>
                <div className="h-20 flex items-center border-b border-solid border-silver">
                    <button
                        type="button"
                        className="w-full h-full flex justify-between items-center cursor-pointer pr-7"
                        onClick={handleMyWrite}
                    >
                        <span className="px-4">내가 쓴 글</span>
                        {clickedArrow ? (
                            <I.ArrowUp
                                fontSize={0.5}
                                color={theme.color.navy}
                            />
                        ) : (
                            <I.ArrowDown
                                fontSize={0.5}
                                color={theme.color.navy}
                            />
                        )}
                    </button>
                </div>
                {clickedArrow && (
                    <div className="flex flex-col border-b border-solid border-silver">
                        <Link to="/mypage/board">
                            <span className="px-4 h-20 flex items-center ml-4 text-label">
                                게시글
                            </span>
                        </Link>
                        <Link to="/mypage/comment">
                            <span className="px-4 h-20 flex items-center ml-4 text-label">
                                댓글 / 답글
                            </span>
                        </Link>
                    </div>
                )}
                <div className="h-20 mb-7 flex items-center border-b border-solid border-silver">
                    <Link to="/mypage/like">
                        <span className="px-4">관심 보낸 글</span>
                    </Link>
                </div>
                <div className="flex flex-col justify-center relative">
                    <Link to="/logout">
                        <Button
                            className="border border-solid border-gray"
                            size="md"
                        >
                            로그아웃
                        </Button>
                    </Link>
                    <div className="px-4 text-lightGray mt-4">
                        <Link to="/mypage/secession">탈퇴하기</Link>
                    </div>
                </div>
            </section>
        )
    );
};

export default MyPage;
