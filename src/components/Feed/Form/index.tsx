import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import * as S from './Form.style';
import SelectPlaceBox from './SelectPlaceBox';
import SelectSportBox from './SelectSportBox';

import { postFeed, postImageFile } from '@/apis/feeds';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { useInput } from '@/hooks/useInput';
import theme from '@/styles/theme';

const Form = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [selectSport, setSelectSport] = useState(false);
    const [selectPlace, setSelectPlace] = useState(false);
    const [feedFiles, setFeedFiles] = useState<string[]>([]);

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
            // Success Popup.
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const {
        value: sport,
        setValue: setSport,
        onClear: handleSportClear,
    } = useInput('', (targetValue: string) => {
        setSport(targetValue);
    });

    const {
        value: title,
        setValue: setTitle,
        onChange: handleChangeTitle,
        onClear: handleTitleClear,
    } = useInput('', (targetValue: string) => {
        setTitle(targetValue);
    });

    const {
        value: place,
        setValue: setPlace,
        onChange: handleChangePlace,
        onClear: handlePlaceClear,
    } = useInput('', (targetValue: string) => {
        setPlace(targetValue);
    });

    const {
        value: placeDetail,
        setValue: setPlaceDetail,
        onChange: handleChangePlaceDetail,
        onClear: handlePlaceDetailClear,
    } = useInput('', (targetValue: string) => {
        setPlaceDetail(targetValue);
    });

    const {
        value: content,
        setValue: setContent,
        onChange: handleChangeContent,
    } = useInput('', (targetValue: string) => {
        setContent(targetValue);
    });

    const handleSportFocus = () => {
        setSport('');
        setSelectSport(true);
    };

    const handlePlaceFocus = () => {
        setSelectPlace(true);
    };

    const handleCreateFeed = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchPostFeed.mutate();
    };

    const checkForm = (params: {
        sport: string;
        title: string;
        content: string;
    }) => {
        if (params.sport && params.title && params.content)
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

    useEffect(() => {
        checkForm({ sport, title, content });
    }, [sport, title, content]);

    return (
        <S.Form>
            <Input
                width={20.375}
                name="운동"
                type="text"
                placeholder="함께 할 운동을 선택해 주세요"
                value={sport}
                onFocus={handleSportFocus}
                tabIndex="1"
                autoFocus={false}
                onClear={handleSportClear}
                essential
            />
            {selectSport && (
                <SelectSportBox
                    setSport={setSport}
                    setSelectSport={setSelectSport}
                />
            )}
            <Input
                width={20.375}
                name="제목"
                type="text"
                placeholder="운동 이름, 구하는 친구 수, 장소 등이 드러나면 좋아요"
                value={title}
                onChange={handleChangeTitle}
                tabIndex="2"
                autoFocus={false}
                onClear={handleTitleClear}
                essential
            />
            <Input
                width={20.375}
                name="운동 장소"
                type="text"
                placeholder="운동 장소를 검색해 보세요"
                value={place}
                onFocus={handlePlaceFocus}
                onChange={handleChangePlace}
                autoFocus={false}
                onClear={handlePlaceClear}
                tabIndex="3"
            />
            {selectPlace && <SelectPlaceBox setPlace={setPlace} />}
            <Input
                width={20.375}
                name="장소 상세"
                type="text"
                placeholder="호수, ⃝⃝ 앞 등 상세 장소 정보를 적어주세요"
                value={placeDetail}
                onChange={handleChangePlaceDetail}
                autoFocus={false}
                onClear={handlePlaceDetailClear}
                tabIndex="4"
            />
            <S.LabelWrapper>
                <S.Label htmlFor={content}>내용</S.Label>
                <S.Asterisk>*</S.Asterisk>
            </S.LabelWrapper>
            <S.ContentTextArea
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
                    <S.FileLabel htmlFor="file" />
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
                        handleCreateFeed(e)
                    }
                >
                    <S.ButtonText isDisabled={isDisabled}>완료</S.ButtonText>
                </Button>
            </S.ButtonWrapper>
        </S.Form>
    );
};

export default Form;
