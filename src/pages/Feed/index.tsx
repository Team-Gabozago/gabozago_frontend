import { useQuery, useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import * as S from './Feed.style';

import { getFeed, likeFeed } from '@/apis/feeds';
import I from '@/components/common/Icons';
import CreateComment from '@/components/Feed/Comment';
import CommentList from '@/components/Feed/Comment/CommentList';
import FeedProfile from '@/components/Feed/Profile';
import Header from '@/components/MyPage/Header';
import theme from '@/styles/theme';

const dummyFeedImages = [
    {
        id: 1,
        url: process.env.GABOZAGO_DEFAULT_IMAGE,
    },
    {
        id: 2,
        url: process.env.GABOZAGO_DEFAULT_IMAGE,
    },
    {
        id: 3,
        url: process.env.GABOZAGO_DEFAULT_IMAGE,
    },
    {
        id: 4,
        url: process.env.GABOZAGO_DEFAULT_IMAGE,
    },
];

const FeedPage = () => {
    const { id } = useParams();

    // useQuery.
    const { data: feed, refetch: refetchFeed } = useQuery(['feed'], () => {
        if (id) return getFeed(+id);
        return true;
    });

    const { data: comments } = useQuery(['feedComments']);

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
                    <FeedProfile author={feed.author} updatedAt={feed.updatedAt} />
                    <I.Toggle fontSize={1.5} color={theme.color.gray} />
                </S.FeedHeader>
                <S.FeedContainer>
                    <S.FeedAddress>{feed.location.place} {feed.location.placeDetail}</S.FeedAddress>
                    <S.FeedContent>{feed.content}</S.FeedContent>
                    <S.FeedImages>
                        {feed.images || dummyFeedImages.map(file => (
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
                    <CreateComment feedId={feed.id} profileImage={feed.author && feed.author.path} />
                    <CommentList author={feed.author} updatedAt={feed.updatedAt} />
                </S.FeedContainer>
            </>
        )
    );
};

export default FeedPage;
