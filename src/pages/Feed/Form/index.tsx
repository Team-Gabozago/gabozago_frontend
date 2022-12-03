import { useEffect, useState } from 'react';

import * as S from './Form.style';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { useInput } from '@/hooks/useInput';
import theme from '@/styles/theme';

const Form = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [selectSport, setSelectSport] = useState(false);
    const {
        value: sport,
        setValue: setSport,
        onChange: handleChangeSport,
    } = useInput('', (targetValue: string) => {
        setSport(targetValue);
    });

    const {
        value: title,
        setValue: setTitle,
        onChange: handleChangeTitle,
    } = useInput('', (targetValue: string) => {
        setTitle(targetValue);
    });

    const {
        value: place,
        setValue: setPlace,
        onChange: handleChangePlace,
    } = useInput('', (targetValue: string) => {
        setPlace(targetValue);
    });

    const {
        value: placeDetail,
        setValue: setPlaceDetail,
        onChange: handleChangePlaceDetail,
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
        setSelectSport(true);
    };

    const handlePlaceFocus = () => {};

    const handleCreateFeed = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
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
                onChange={handleChangeSport}
                onFocus={handleSportFocus}
                tabIndex="1"
                autoFocus={false}
                essential
            />
            {selectSport && (
                <S.SelectSportBox>
                    <ul>
                        <li>당구</li>
                        <li>당구</li>
                        <li>당구</li>
                        <li>당구</li>
                    </ul>
                </S.SelectSportBox>
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
                essential
            />
            <Input
                width={20.375}
                name="운동 장소"
                type="text"
                placeholder="운동 장소를 검색해 보세요"
                value={place}
                onChange={handleChangePlace}
                onFocus={handlePlaceFocus}
                autoFocus={false}
                tabIndex="3"
            />
            <Input
                width={20.375}
                name="장소 상세"
                type="text"
                placeholder="호수, ⃝⃝ 앞 등 상세 장소 정보를 적어주세요"
                value={placeDetail}
                onChange={handleChangePlaceDetail}
                autoFocus={false}
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
                    <S.ImageBox />
                    <S.ImageBox />
                    <S.ImageBox />
                    <S.ImageBox />
                    <S.ImageBox />
                </S.ImageContainer>
                <S.FileInput type="file" id="file" />
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
