import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as S from './Form.style';
import SelectPlaceBox from './SelectPlaceBox';
import SelectSportBox from './SelectSportBox';

import { getFeed, postFeed, putFeed, postImageFile } from '@/apis/feeds';
import Button from '@/components/common/Button';
import GlobalModal from '@/components/GlobalModal';
import ModalContent from '@/components/ModalContent';
import theme from '@/styles/theme';
import { CategoryType } from '@/types/sport';

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
        setIsSelectBoxModal(true)
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
            images: feedFiles
        }

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
            images: feedFiles
        }

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
            <S.Form>
                <S.LabelWrapper>
                    <S.Label htmlFor={sport.name}>운동</S.Label>
                    <S.Asterisk>*</S.Asterisk>
                </S.LabelWrapper>
                <S.FeedInput
                    id={sport.name}
                    name="운동"
                    type="text"
                    placeholder="함께 할 운동을 선택해 주세요"
                    value={sport.name}
                    onFocus={handleSportFocus}
                />
                {selectSport && (
                    <SelectSportBox
                        setSport={setSport}
                        setSelectSport={setSelectSport}
                    />
                )}
                <S.LabelWrapper>
                    <S.Label htmlFor={title}>제목</S.Label>
                    <S.Asterisk>*</S.Asterisk>
                </S.LabelWrapper>
                <S.FeedInput
                    name="제목"
                    type="text"
                    placeholder="운동 이름, 구하는 친구 수, 장소 등이 드러나면 좋아요"
                    value={title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeTitle(e)
                    }
                />
                <S.LabelWrapper>
                    <S.Label htmlFor={place.name}>운동 장소</S.Label>
                </S.LabelWrapper>
                <S.FeedInput
                    name="운동 장소"
                    type="text"
                    placeholder="운동 장소를 검색해 보세요"
                    value={place.name}
                    onFocus={handlePlaceFocus}
                />
                {isSelectBoxModal &&
                    <GlobalModal size="large" handleCancelClick={() => setIsSelectBoxModal(false)}>
                        <SelectPlaceBox setPlace={setPlace} setIsSelectBoxModal={setIsSelectBoxModal} />
                    </GlobalModal>
                }
                <S.LabelWrapper>
                    <S.Label htmlFor={placeDetail}>장소 상세</S.Label>
                </S.LabelWrapper>
                <S.FeedInput
                    name="장소 상세"
                    type="text"
                    placeholder="호수, ⃝⃝ 앞 등 상세 장소 정보를 적어주세요"
                    value={placeDetail}
                    onChange={handleChangePlaceDetail}
                />
                <S.LabelWrapper>
                    <S.Label htmlFor={content}>내용</S.Label>
                    <S.Asterisk>*</S.Asterisk>
                </S.LabelWrapper>
                <S.ContentTextArea
                    id={content}
                    placeholder="약속 시간, 준비물, 실력 등 플레이를 위한 정보를 적어주세요"
                    value={content}
                    onChange={handleChangeContent}
                />
                <S.ImageWrapper>
                    <S.ImageHeader>
                        <S.Label>이미지 첨부</S.Label>
                        <S.SubText>최대 5장</S.SubText>
                    </S.ImageHeader>

                    <S.ImageContainer>
                        <S.FileLabel htmlFor="file">추가</S.FileLabel>
                        {feedFiles.map(file => (
                            <S.ImageBox src={file} />
                        ))}
                    </S.ImageContainer>
                    <S.FileInput
                        type="file"
                        id="file"
                        accept="image/*"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleImageUpdate(e)
                        }
                    />
                </S.ImageWrapper>

                <S.ButtonWrapper>
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
                        <S.ButtonText isDisabled={isDisabled}>
                            {id ? '수정' : '완료'}
                        </S.ButtonText>
                    </Button>
                </S.ButtonWrapper>
            </S.Form>
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
