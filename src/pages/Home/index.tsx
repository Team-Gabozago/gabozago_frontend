import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import * as S from './Home.style';

import { getAllFeeds } from '@/apis/feeds';
import Header from '@/components/common/Header';
import Navigation from '@/components/common/Navigation';
import CreateFeed from '@/components/CreateFeed'
import Post from '@/components/Post';
import { IPost } from '@/types/post';

export default function HomePage() {
    const [sortType, setSortType] = useState('NEWEST');

    const { data: feeds, refetch: refetchFeeds } = useQuery(['feeds'], () => getAllFeeds(sortType));

    const handleNaviLi = (value: string) => {
        setSortType(value);
    }

    useEffect(() => {
        refetchFeeds();
    }, [sortType])

    return (
        <S.HomePage>
            <Header />
            <S.Title>우리 동네의<br /> 새 제안이에요.</S.Title>
            <Navigation sortType={sortType} handleNaviLi={handleNaviLi} />
            {feeds && feeds.length > 0 && feeds.map((feed: IPost) => (
                <Post post={feed} />
            ))}
            <CreateFeed />
        </S.HomePage>
    );
}
