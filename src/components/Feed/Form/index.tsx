import styled from '@emotion/styled';
import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
    getFeed,
    postFeed,
    putFeed,
    postImageFile,
    getCategories,
} from '@/apis/feeds';
import Button from '@/components/common/Button';
import SelectPlaceBox from '@/components/Feed/SelectPlaceBox';
import SelectSportBox from '@/components/Feed/SelectSportBox';
import GlobalModal from '@/components/GlobalModal';
import ModalContent from '@/components/ModalContent';
import theme from '@/styles/theme';
import { AreaType } from '@/types/place';
import { CategoryType } from '@/types/sport';
import { fadeInDown } from '@/utils/animation';

const Label = styled.label`
    color: ${theme.color.label};
    font-size: ${theme.fontSize.xs};
    margin-right: 5px;
`;

const Asterisk = styled.span`
    color: ${theme.color.blue};
    font-size: ${theme.fontSize.xs};
`;

const FeedInput = styled.input`
    width: 20.375rem;
    padding: 0 0 0.5rem 0.5rem;
    border-bottom: 1px solid ${theme.color.gray};
    animation: ${fadeInDown} 1s;
    &:focus {
        border-bottom: 1px solid ${theme.color.blue};
    }
    font-size: ${theme.fontSize.xs};
`;

const Form = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(true);
    const [selectSport, setSelectSport] = useState(false);
    const [feedFiles, setFeedFiles] = useState<string[]>([]);
    const [isSuccessModal, setIsSucessModal] = useState(false);
    const [isSelectBoxModal, setIsSelectBoxModal] = useState(false);
    const [modalText, setModalText] = useState({
        title: '',
        description: '',
    });

    const { data: sportCategories } = useQuery(['categories'], getCategories);

    const { data: feed } = useQuery(['feed'], () => {
        if (id) return getFeed(+id);
        return false;
    });

    const fetchPostImageFile = useMutation(postImageFile, {
        onSuccess: async (url: string) => {
            if (url) {
                if (feedFiles.length === 5) return;
                setFeedFiles([...feedFiles, url]);
            }
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const fetchPostFeed = useMutation(postFeed, {
        onSuccess: async () => {
            setModalText({
                title: '성공적으로 등록하였습니다.',
                description: '피드 등록 성공!',
            });
            setIsSucessModal(true);
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const fetchPutFeed = useMutation(putFeed, {
        onSuccess: async () => {
            setModalText({
                title: '성공적으로 수정하였습니다.',
                description: '피드 수정 성공!',
            });
            setIsSucessModal(true);
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const [sport, setSport] = useState<CategoryType>({ id: 0, name: '' });
    const [title, setTitle] = useState('');
    const [place, setPlace] = useState({ name: '', longitude: 0, latitude: 0 });
    const [placeDetail, setPlaceDetail] = useState('');
    const [content, setContent] = useState('');

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleChangePlaceDetail = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPlaceDetail(e.target.value);
    };

    const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const handleSportFocus = () => {
        setSport({ id: 0, name: '' });
        setSelectSport(true);
    };

    const handlePlaceFocus = () => {
        setIsSelectBoxModal(true);
    };

    const handleCreateFeed = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newFeed = {
            categoryId: sport.id,
            title,
            content,
            longitude: place.longitude,
            latitude: place.latitude,
            place: place.name,
            placeDetail,
            images: feedFiles,
        };

        fetchPostFeed.mutate(newFeed);
    };

    const handlePutFeed = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newFeed = {
            categoryId: sport.id,
            title,
            content,
            longitude: place.longitude,
            latitude: place.latitude,
            place: place.name,
            placeDetail,
            images: feedFiles,
        };

        if (id) {
            fetchPutFeed.mutate({ id: +id, putFeedType: newFeed });
        }
    };

    const checkForm = (params: {
        sport: CategoryType;
        title: string;
        content: string;
    }) => {
        if (params.sport.name && params.title && params.content)
            setIsDisabled(false);
        else setIsDisabled(true);
    };

    const handleImageUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { files } = e.target as HTMLInputElement;

        if (files) {
            fetchPostImageFile.mutate(files[0]);
        }
    };

    const handleSuccessModal = () => {
        navigate('/home');
    };

    useEffect(() => {
        checkForm({ sport, title, content });
    }, [sport, title, content]);

    useEffect(() => {
        if (feed) {
            setSport({ id: feed.category.id, name: feed.category.text });
            setTitle(feed.title);
            setPlace({
                name: feed.location.place,
                latitude: feed.location.latitude,
                longitude: feed.location.longitude,
            });
            setPlaceDetail(feed.location.placeDetail);
            setContent(feed.content);
        }
    }, [feed]);

    return (
        <>
            <form className="flex flex-col items-center gap-6 p-6">
                <div className="w-[20.375rem] animate-fadeInDown duration-100">
                    <Label htmlFor={sport.name}>운동</Label>
                    <Asterisk>*</Asterisk>
                </div>
                <FeedInput
                    id={sport.name}
                    name="운동"
                    type="text"
                    placeholder="함께 할 운동을 선택해 주세요"
                    value={sport.name}
                    onFocus={handleSportFocus}
                />
                {selectSport && (
                    <SelectSportBox
                        sportCategories={sportCategories}
                        setSport={setSport}
                        setSelectSport={setSelectSport}
                    />
                )}
                <div className="w-[20.375rem] animate-fadeInDown duration-100">
                    <Label htmlFor={title}>제목</Label>
                    <Asterisk>*</Asterisk>
                </div>
                <FeedInput
                    name="제목"
                    type="text"
                    placeholder="운동 이름, 구하는 친구 수, 장소 등이 드러나면 좋아요"
                    value={title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeTitle(e)
                    }
                />
                <div className="w-[20.375rem] animate-fadeInDown duration-100">
                    <Label htmlFor={place.name}>운동 장소</Label>
                </div>
                <FeedInput
                    name="운동 장소"
                    type="text"
                    placeholder="운동 장소를 검색해 보세요"
                    value={place.name}
                    onFocus={handlePlaceFocus}
                />
                {isSelectBoxModal && (
                    <GlobalModal
                        size="large"
                        handleCancelClick={() => setIsSelectBoxModal(false)}
                    >
                        <SelectPlaceBox
                            handlePlaceArea={(placeinfo: AreaType) =>
                                setPlace(placeinfo)
                            }
                            setIsSelectBoxModal={setIsSelectBoxModal}
                        />
                    </GlobalModal>
                )}
                <div className="w-[20.375rem] animate-fadeInDown duration-100">
                    <Label htmlFor={placeDetail}>장소 상세</Label>
                </div>
                <FeedInput
                    name="장소 상세"
                    type="text"
                    placeholder="호수, ⃝⃝ 앞 등 상세 장소 정보를 적어주세요"
                    value={placeDetail}
                    onChange={handleChangePlaceDetail}
                />
                <div className="w-[20.375rem]">
                    <Label htmlFor={content}>내용</Label>
                    <Asterisk>*</Asterisk>
                </div>
                <textarea
                    id={content}
                    className="w-[20.375rem] h-[17.5rem] px-3 py-2 border-[1px] border-solid border-gray text-xs rounded resize-none animate-fadeInDown duration-100"
                    placeholder="약속 시간, 준비물, 실력 등 플레이를 위한 정보를 적어주세요"
                    value={content}
                    onChange={handleChangeContent}
                />
                <div className="mb-16">
                    <header className="w-[20.375rem] flex justify-between mb-2">
                        <Label>이미지 첨부</Label>
                        <span className="text-xs text-lightGray">최대 5장</span>
                    </header>

                    <article className="flex flex-wrap gap-3">
                        <label
                            htmlFor="file"
                            className="w-[4.5rem] h-[4.5rem] flex justify-center items-center bg-navy text-white rounded cursor-pointer"
                        >
                            추가
                        </label>
                        {feedFiles.map(file => (
                            <img
                                aria-hidden="true"
                                className="w-[4.5rem] h-[4.5rem] rounded cursor-pointer"
                                src={file}
                                alt="FeedImage"
                            />
                        ))}
                    </article>
                    <input
                        type="file"
                        id="file"
                        className="w-0 h-0 absolute overflow-hidden"
                        accept="image/*"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleImageUpdate(e)
                        }
                    />
                </div>

                <div className="mb-16">
                    <Button
                        type="submit"
                        size="md"
                        backgroundColor={
                            isDisabled ? theme.color.white : theme.color.navy
                        }
                        disabled={isDisabled}
                        onClick={(e: React.MouseEvent<HTMLFormElement>) =>
                            id ? handlePutFeed(e) : handleCreateFeed(e)
                        }
                    >
                        <span
                            className={`${
                                isDisabled ? 'text-black' : 'text-white'
                            }`}
                        >
                            {id ? '수정' : '완료'}
                        </span>
                    </Button>
                </div>
            </form>
            {isSuccessModal && (
                <GlobalModal
                    size="small"
                    handleCancelClick={() => setIsSucessModal(false)}
                >
                    <ModalContent
                        title={modalText.title}
                        description={modalText.description}
                        buttonText="홈으로"
                        handleButtonClick={handleSuccessModal}
                    />
                </GlobalModal>
            )}
        </>
    );
};

export default Form;
