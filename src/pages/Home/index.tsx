import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './Home.style';

import { getMyArea } from '@/apis/area';
import { getAllFeeds } from '@/apis/feeds';
import Header from '@/components/common/Header';
import Navigation from '@/components/common/Navigation';
import CreateFeed from '@/components/CreateFeed';
import Post from '@/components/Post';
import { USER_LOCATION_NOT_FOUND } from '@/constants/code';
import { Feed } from '@/interfaces/feed';

export default function HomePage() {
    const [sortType, setSortType] = useState('NEWEST');

    const { data: feeds, refetch: refetchFeeds } = useQuery(['allFeeds'], () =>
        getAllFeeds(sortType)
    );

    const { data: myArea } = useQuery(
        ['myArea'],
        getMyArea
    );

    const handleNaviLi = (value: string) => {
        setSortType(value);
    };

    useEffect(() => {
        refetchFeeds();
    }, [sortType, refetchFeeds]);

    return (
        <S.HomePage>
            <Header myArea={myArea} refetchFeeds={refetchFeeds} />
            <S.Title>
                우리 동네의
                <br /> 새 제안이에요.
            </S.Title>
            {myArea && myArea.code === USER_LOCATION_NOT_FOUND ? (
                <S.NotFoundArea>
                    아직 동네가 설정되지 않았어요.
                    <br />
                    보고 싶은 동네를 설정해보세요.
                </S.NotFoundArea>
            ) : (
                <>
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
                                <Post post={feed} />
                            </Link>
                        ))}
                    <CreateFeed />
                </>
            )}
        </S.HomePage>
    );
}
