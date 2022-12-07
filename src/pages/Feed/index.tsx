import { useQuery, useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import * as S from './Feed.style';

import { getFeed, unLikeFeed, likeFeed, deleteFeed } from '@/apis/feeds';
import I from '@/components/common/Icons';
import CreateComment from '@/components/Feed/Comment';
import CommentList from '@/components/Feed/Comment/CommentList';
import FeedProfile from '@/components/Feed/Profile';
import GlobalModal from '@/components/GlobalModal';
import ModalContent from '@/components/ModalContent';
import Header from '@/components/MyPage/Header';
import Overlayout from '@/components/OverLayout';
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
    const navigate = useNavigate();
    const [isToggleModal, setIsToggleModal] = useState(false);
    const [isDeleteModal, setIsDeleteModal] = useState(false);

    // useQuery.
    const { data: feed, refetch: refetchFeed } = useQuery(['feed'], () => {
        if (id) return getFeed(+id);
        return true;
    });

    const { data: comments } = useQuery(['feedComments']);

    const fetchUnLikeFeed = useMutation(unLikeFeed, {
        onSuccess: async () => {
            refetchFeed();
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    })

    const fetchLikeFeed = useMutation(likeFeed, {
        onSuccess: async () => {
            refetchFeed();
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const fetchDeleteFeed = useMutation(deleteFeed, {
        onSuccess: async () => {
            navigate('/home');
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    })


    const handleLike = (liked: boolean) => {
        if (liked) {
            fetchUnLikeFeed.mutate(id);
        } else {
            fetchLikeFeed.mutate(id);
        }
    };

    const handleToggle = () => {
        setIsToggleModal(!isToggleModal);
    }

    const handleDeleteFeed = () => {
        // delete mutation
        fetchDeleteFeed.mutate(id);
    }

    return (
        feed && (
            <>
                <Header title={feed.title} />
                <S.FeedHeader>
                    <FeedProfile author={feed.author} updatedAt={feed.updatedAt} />
                    <S.ToggleButton onClick={handleToggle}>
                        <I.Toggle fontSize={1.5} color={theme.color.gray} />
                    </S.ToggleButton>
                    {isToggleModal &&
                        <>
                            <Overlayout handleCancelClick={() => setIsToggleModal(false)} />
                            <S.ToggleModal>
                                <Link to="/feed/put">
                                    <S.ToggleModalBox><I.Edit /> 수정하기</S.ToggleModalBox>
                                </Link>
                                <S.ToggleModalBox onClick={() => setIsDeleteModal(true)}><I.Edit /> 삭제하기</S.ToggleModalBox>
                            </S.ToggleModal>
                        </>
                    }
                    {isDeleteModal &&
                        <GlobalModal size="small" handleCancelClick={() => setIsDeleteModal(false)}>
                            <ModalContent
                                title="해당 피드를 삭제하시겠습니까?"
                                description="삭제된 피드는 복구 불가능합니다."
                                buttonText="삭제"
                                handleButtonClick={handleDeleteFeed}
                            />
                        </GlobalModal>
                    }
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
                    <S.LikeButton liked={feed.liked} onClick={() => handleLike(feed.liked)}>
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
