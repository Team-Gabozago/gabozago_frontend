import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLongPress } from 'use-long-press';

import { getMyBoardPage } from '@/apis/mypage';
import Blank from '@/components/Blank';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import FeedComponent from '@/components/Feed';
import GlobalModal from '@/components/GlobalModal';
import ModalContent from '@/components/ModalContent';
import Header from '@/components/MyPage/Header';
import { Feed } from '@/interfaces/feed';

const MyBoardPage = () => {
    const [isModal, setIsModal] = useState(false);
    const { data: feeds, isLoading } = useQuery(['myPage'], getMyBoardPage);

    const bind = useLongPress(() => {
        setIsModal(true);
    });

    if (isLoading) return <LoadingSpinner size="large" />;

    return (
        <>
            <section {...bind()}>
                <Header title="내가 쓴 게시글" />
                <div className="px-7">
                    <div className="flex justify-center items-center py-7 text-darkGray text-xs">
                        길게 눌러 삭제
                    </div>
                    {feeds && feeds.length > 0 ? (
                        feeds.map((feed: Feed) => (
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
                        title="게시글을 삭제하시겠어요?"
                        description="삭제한 게시글은 되돌릴 수 없어요."
                        buttonText="삭제"
                        handleButtonClick={() => setIsModal(false)}
                    />
                </GlobalModal>
            )}
        </>
    );
};

export default MyBoardPage;
