import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getMyArea } from '@/apis/area';
import { getFeeds } from '@/apis/feeds';
import { getMyPage } from '@/apis/mypage';
import Blank from '@/components/Blank';
import Header from '@/components/common/Header';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import Navigation from '@/components/common/Navigation';
import Title from '@/components/common/Title';
import CreateFeed from '@/components/CreateFeed';
import FeedComponent from '@/components/Feed';
import GlobalModal from '@/components/GlobalModal';
import LikeSportModal from '@/components/LikeSportModal';
import { Feed } from '@/interfaces/feed';
import { LikeSportCategory } from '@/interfaces/sport';

const LikePage = () => {
    const [clickedSport, setClickedSport] = useState({ id: 0, name: '' });
    const [sortType, setSortType] = useState('NEWEST');

    const [isSportModal, setIsSportModal] = useState(false);
    const { data: me, isLoading: meLoading } = useQuery(['myInfo'], getMyPage);

    const {
        data: feeds,
        isLoading: feedsLoading,
        refetch: refetchFeeds,
    } = useQuery(['feeds'], () => getFeeds(clickedSport.name, sortType));

    const { data: myArea } = useQuery(['myArea'], getMyArea);

    const handlePlusClick = () => {
        setIsSportModal(true);
    };

    const handleNaviLi = (value: string) => {
        setSortType(value);
    };

    useEffect(() => {
        refetchFeeds();
    }, [clickedSport, refetchFeeds, sortType]);

    const isCheckFavoriteSports = () => {
        if (me) {
            const checkFavorite = me.categories.every(
                (category: LikeSportCategory) => category.favorite === false
            );
            return checkFavorite;
        }
        return true;
    };

    if (meLoading || feedsLoading) return <LoadingSpinner size="large" />;

    return (
        <section className="pb-[4rem] px-7">
            <Header myArea={myArea} />
            {me && !isCheckFavoriteSports() ? (
                <>
                    <Title>
                        관심 운동의
                        <br />새 제안이에요.
                    </Title>
                    <div className="flex gap-2 flex-wrap">
                        {me.categories.map(
                            (category: LikeSportCategory) =>
                                category.favorite && (
                                    <button
                                        key={`favorite-${category.id}`}
                                        type="button"
                                        className={`h-7 rounded-2xl px-3 text-silver font-xs 
                                        border
                                        border-solid
                                        ${
                                            category.id === clickedSport.id
                                                ? 'border-blue'
                                                : 'border-gray'
                                        }
                                        ${
                                            category.id === clickedSport.id &&
                                            'bg-blue'
                                        }`}
                                        onClick={() =>
                                            setClickedSport({
                                                id: category.id,
                                                name: category.name,
                                            })
                                        }
                                    >
                                        {category.name}
                                    </button>
                                )
                        )}
                        <button
                            type="button"
                            className="w-8 h-7 rounded-2xl bg-lightNavy text-white"
                            onClick={handlePlusClick}
                        >
                            +
                        </button>
                    </div>
                    <Navigation
                        sortType={sortType}
                        handleNaviLi={handleNaviLi}
                    />
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
                </>
            ) : (
                <div className="h-screen leading-4 flex flex-col justify-center items-center">
                    <div className="text-center text-silver text-xs mb-4">
                        아직 등록된 관심 운동이 없어요.
                        <br />
                        좋아하는 운동 종목을 설정해보세요.
                    </div>
                    <button
                        type="button"
                        className="w-24 h-8 bg-silver text-xs font-weight rounded-2xl"
                        onClick={handlePlusClick}
                    >
                        관심운동 추가
                    </button>
                </div>
            )}
            <CreateFeed />
            {isSportModal && (
                <GlobalModal
                    size="medium"
                    handleCancelClick={() => setIsSportModal(false)}
                >
                    <LikeSportModal
                        likeSports={me.categories}
                        setIsSportModal={setIsSportModal}
                    />
                </GlobalModal>
            )}
        </section>
    );
};

export default LikePage;
