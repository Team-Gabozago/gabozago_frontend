import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getMyArea } from '@/apis/area';
import { getAllFeeds } from '@/apis/feeds';
import Header from '@/components/common/Header';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import Navigation from '@/components/common/Navigation';
import CreateFeed from '@/components/CreateFeed';
import FeedComponent from '@/components/Feed';
import { USER_LOCATION_NOT_FOUND } from '@/constants/code';
import { Feed } from '@/interfaces/feed';

const HomePage: React.FC = () => {
    const [sortType, setSortType] = useState('NEWEST');

    const {
        data: feeds,
        isLoading: feedsLoading,
        refetch: refetchFeeds,
    } = useQuery(['allFeeds'], () => getAllFeeds(sortType));

    const { data: myArea } = useQuery(['myArea'], getMyArea);

    const handleNaviLi = (value: string) => {
        setSortType(value);
    };

    useEffect(() => {
        refetchFeeds();
    }, [sortType, refetchFeeds]);

    if (feedsLoading) return <LoadingSpinner size="large" />;

    return (
        <section className="pb-[4rem] px-7">
            <Header myArea={myArea} />
            {myArea && myArea.code === USER_LOCATION_NOT_FOUND ? (
                <div className="h-screen flex justify-center items-center text-silver text-xs">
                    아직 동네가 설정되지 않았어요.
                    <br />
                    보고 싶은 동네를 설정해보세요.
                </div>
            ) : (
                <>
                    <h1 className="my-8 font-bold text-silver text-title font-GangwonEduPower">
                        우리 동네의
                        <br /> 새 제안이에요.
                    </h1>
                    <Navigation
                        sortType={sortType}
                        handleNaviLi={handleNaviLi}
                    />
                    {feeds &&
                        feeds.length > 0 &&
                        feeds.map((feed: Feed) => (
                            <Link
                                to={`/feed/${feed.id}`}
                                key={`post-${feed.id}`}
                            >
                                <FeedComponent post={feed} />
                            </Link>
                        ))}
                </>
            )}
            <CreateFeed />
        </section>
    );
};

export default HomePage;
