import { useQuery, useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import * as S from './Feed.style';

import { getFeed, likeFeed } from '@/apis/feeds';
import I from '@/components/common/Icons';
import Header from '@/components/MyPage/Header';
import theme from '@/styles/theme';

const dummyFeedImages = [
    {
        id: 1,
        url: 'https://pbs.twimg.com/media/E5icr1KVoAIS1tI?format=jpg&name=medium',
    },
    {
        id: 2,
        url: 'https://pbs.twimg.com/media/E5icr1KVoAIS1tI?format=jpg&name=medium',
    },
    {
        id: 3,
        url: 'https://pbs.twimg.com/media/E5icr1KVoAIS1tI?format=jpg&name=medium',
    },
];

const FeedPage = () => {
    const { id } = useParams();

    // useQuery.
    const { data: feed, refetch: refetchFeed } = useQuery(['feed'], () => {
        if (id) return getFeed(+id);
        return true;
    });

    const fetchLikeFeed = useMutation(likeFeed, {
        onSuccess: async () => {
            refetchFeed();
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const handleLike = () => {
        // refetch
        fetchLikeFeed.mutate(id);
    };

    return (
        feed && (
            <>
                <Header title={feed.title} />
                <S.FeedHeader>
                    <S.ProfileContainer>
                        <img alt="프로필 이미지" />
                        <S.ProfileContent>
                            <span>달팽이</span>
                            <S.ProfileSubText>11.10</S.ProfileSubText>
                        </S.ProfileContent>
                    </S.ProfileContainer>
                    <I.Toggle fontSize={1.5} color={theme.color.gray} />
                </S.FeedHeader>
                <S.FeedContainer>
                    <S.FeedAddress>피드 주소가 들어갈 곳</S.FeedAddress>
                    <S.FeedContent>{feed.content}</S.FeedContent>
                    <S.FeedImages>
                        {dummyFeedImages.map(file => (
                            <S.FeedImageBox
                                src={file.url}
                                alt="피드 이미지"
                                key={`image-${file.id}`}
                            />
                        ))}
                    </S.FeedImages>
                    <S.LikeButton liked={feed.liked} onClick={handleLike}>
                        <I.Heart
                            color={
                                feed.liked
                                    ? theme.color.white
                                    : theme.color.gray
                            }
                        />
                        <span>관심있어요</span>
                    </S.LikeButton>
                </S.FeedContainer>
            </>
        )
    );
};

export default FeedPage;
