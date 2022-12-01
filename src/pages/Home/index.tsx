import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import * as S from './Home.style';

import { getAllFeeds } from '@/apis/feeds';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Navigation from '@/components/common/Navigation';
import Post from '@/components/Post';
import WriteButton from '@/components/Post/WritePostButton';
import { IPost } from '@/types/post';

export default function HomePage() {
    const [clickedValue, setClickedValue] = useState('NEWEST');

    const { data: feeds, refetch: refetchFeeds } = useQuery(['feeds'], () => getAllFeeds());

    const handleNaviLi = (value: string) => {
        setClickedValue(value);
    }

    return (
        <S.HomePage>
            <S.Contents>
                <Header />
                <S.Title>우리 동네의<br /> 새 제안이에요.</S.Title>
                <Navigation clickedValue={clickedValue} handleNaviLi={handleNaviLi} />
                {feeds && feeds.length > 0 && feeds.map((feed: IPost) => (
                    <Post post={feed} />
                ))}
                <WriteButton />
            </S.Contents>
            <Footer />
        </S.HomePage>
    );
}
