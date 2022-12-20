import { useQuery, useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { getFeed, unLikeFeed, likeFeed, deleteFeed } from '@/apis/feeds';
import I from '@/components/common/Icons';
import Comments from '@/components/Feed/Comments';
import FeedProfile from '@/components/Feed/Profile';
import GlobalModal from '@/components/GlobalModal';
import ModalContent from '@/components/ModalContent';
import Header from '@/components/MyPage/Header';
import Overlayout from '@/components/OverLayout';
import theme from '@/styles/theme';

const FeedPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isToggleModal, setIsToggleModal] = useState(false);
    const [isDeleteModal, setIsDeleteModal] = useState(false);
    const [isImageModal, setIsImageModal] = useState(false);
    const [zoomImage, setZoomImage] = useState({
        id: 0,
        imageUrl: '',
    });

    const { data: feed, refetch: refetchFeed } = useQuery(['feed'], () => {
        if (id) return getFeed(+id);
        return true;
    });

    const fetchUnLikeFeed = useMutation(unLikeFeed, {
        onSuccess: async () => {
            refetchFeed();
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

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
            navigate('/mypage');
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const handleLike = (liked: boolean) => {
        if (liked) {
            fetchUnLikeFeed.mutate(id);
        } else {
            fetchLikeFeed.mutate(id);
        }
    };

    const handleToggle = () => {
        setIsToggleModal(!isToggleModal);
    };

    const handleDeleteFeed = () => {
        fetchDeleteFeed.mutate(id);
    };

    useEffect(() => {
        // 한 번 받아온 데이터도 계속 요청하고 있는데... 수정할 순 없을까?
        refetchFeed();
    }, [id, refetchFeed]);

    return (
        feed && (
            <>
                <Header title={feed.title} />
                <header className="flex justify-between items-center p-6">
                    <FeedProfile
                        author={feed.author}
                        updatedAt={feed.updated_at}
                    />
                    <button
                        type="button"
                        className="relative"
                        onClick={handleToggle}
                    >
                        <I.Toggle fontSize={1.5} color={theme.color.gray} />
                    </button>
                    {isToggleModal && (
                        <>
                            <Overlayout
                                handleCancelClick={() =>
                                    setIsToggleModal(false)
                                }
                            />
                            <section className="w-24 h-20 absolute top-28 right-4 py-4 px-3 rounded-md z-[999] bg-white">
                                <div className="flex flex-col justify-center imtes-center gap-4">
                                    <Link to={`/feed/form/${feed.id}`}>
                                        <button
                                            type="button"
                                            className="w-full text-xs"
                                        >
                                            <I.Edit /> 수정하기
                                        </button>
                                    </Link>
                                    <button
                                        type="button"
                                        className="w-full text-xs"
                                        onClick={() => setIsDeleteModal(true)}
                                    >
                                        <I.Edit /> 삭제하기
                                    </button>
                                </div>
                            </section>
                        </>
                    )}
                    {isDeleteModal && (
                        <GlobalModal
                            size="small"
                            handleCancelClick={() => setIsDeleteModal(false)}
                        >
                            <ModalContent
                                title="해당 피드를 삭제하시겠습니까?"
                                description="삭제된 피드는 복구 불가능합니다."
                                buttonText="삭제"
                                handleButtonClick={handleDeleteFeed}
                            />
                        </GlobalModal>
                    )}
                </header>
                <div className="flex flex-col gap-6 pt-8 px-6">
                    <span className="text-gray text-xs">
                        {/* {feed.location.place} {feed.location.placeDetail} */}
                    </span>
                    <div>{feed.content}</div>
                    <div className="flex gap-3 overflow-x-scroll">
                        {feed.images &&
                            feed.images.map(
                                (image: { id: number; filePath: string }) => (
                                    <input
                                        type="image"
                                        className="w-44 h-44 cursor-pointer rounded-xl"
                                        src={image.filePath}
                                        alt="Feed Image"
                                        key={`image-${image.id}`}
                                        onClick={() => {
                                            setZoomImage({
                                                id: image.id,
                                                imageUrl: image.filePath,
                                            });
                                            setIsImageModal(true);
                                        }}
                                    />
                                )
                            )}
                    </div>
                    {zoomImage.id > 0 && isImageModal && (
                        <GlobalModal
                            size="medium"
                            handleCancelClick={() => setIsImageModal(false)}
                        >
                            <input
                                type="image"
                                className="w-80 h-full"
                                alt="zoom Feed Image"
                                src={zoomImage.imageUrl}
                            />
                        </GlobalModal>
                    )}
                    <button
                        type="button"
                        className={`w-80 h-12 flex justify-center items-center gap-2 rounded-[50px] cursor-pointer
                        border
                        border-solid
                        border-gray
                        ${feed.liked ? 'bg-gray' : 'bg-white'}`}
                        onClick={() => handleLike(feed.liked)}
                    >
                        <I.Heart
                            color={
                                feed.liked
                                    ? theme.color.white
                                    : theme.color.gray
                            }
                        />
                        <span
                            className={`${
                                feed.liked ? 'text-white' : 'text-gray'
                            }`}
                        >
                            관심있어요
                        </span>
                    </button>
                    <Comments
                        id={feed.id}
                        profileImageUrl={
                            feed.author && feed.author.profile_image_url
                        }
                    />
                </div>
            </>
        )
    );
};

export default FeedPage;
