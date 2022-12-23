import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLongPress } from 'use-long-press';

import { getMyLikePage } from '@/apis/mypage';
import Blank from '@/components/Blank';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import FeedComponent from '@/components/Feed';
import GlobalModal from '@/components/GlobalModal';
import ModalContent from '@/components/ModalContent';
import Header from '@/components/MyPage/Header';
import { Feed } from '@/interfaces/feed';

const MyLikePage = () => {
    const [isModal, setIsModal] = useState(false);
    const { data: likes, isLoading } = useQuery(['myPage'], getMyLikePage);

    const bind = useLongPress(() => {
        setIsModal(true);
    });

    if (isLoading) return <LoadingSpinner size="large" />;

    return (
        <>
            <section {...bind()}>
                <Header title="관심 보낸 글" />
                <div className="px-7">
                    <div className="flex justify-center items-center py-7 text-darkGray text-xs">
                        길게 눌러 관심 해제
                    </div>
                    {likes && likes.length > 0 ? (
                        likes.map((feed: Feed) => (
                            <Link
                                to={`/feed/${feed.id}`}
                                key={`post-${feed.id}`}
                            >
                                <FeedComponent post={feed} />
                            </Link>
                        ))
                    ) : (
                        <Blank />
                    )}
                </div>
                <div className="w-full mt-[3.75rem] flex justify-center">
                    <div className="w-2 h-2 rounded-full bg-gray" />
                </div>
            </section>
            {isModal && (
                <GlobalModal
                    size="small"
                    handleCancelClick={() => setIsModal(false)}
                >
                    <ModalContent
                        title="관심을 해제하시겠어요?"
                        description="관심 보낸 글 목록에서 다시 볼 수 없어요."
                        buttonText="해제"
                        handleButtonClick={() => setIsModal(false)}
                    />
                </GlobalModal>
            )}
        </>
    );
};

export default MyLikePage;
