import * as S from './Form.style';

import Input from "@/components/common/Input";
import { useInput } from "@/hooks/useInput";

const Form = () => {
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

    return (
        <S.Form>
            <Input
                width={20.375}
                name="운동"
                type="text"
                placeholder="함께 할 운동을 선택해 주세요"
                value={sport}
                onChange={handleChangeSport}
                tabIndex="1"
                essential
            />
            <Input
                width={20.375}
                name="제목"
                type="text"
                placeholder="운동 이름, 구하는 친구 수, 장소 등이 드러나면 좋아요"
                value={title}
                onChange={handleChangeTitle}
                tabIndex="2"
                essential
            />
            <Input
                width={20.375}
                name="운동 장소"
                type="text"
                placeholder="운동 장소를 검색해 보세요"
                value={place}
                onChange={handleChangePlace}
                tabIndex="3"
            />
            <Input
                width={20.375}
                name="장소 상세"
                type="text"
                placeholder="호수, ⃝⃝ 앞 등 상세 장소 정보를 적어주세요"
                value={placeDetail}
                onChange={handleChangePlaceDetail}
                tabIndex="4"
            />
            <S.LabelWrapper>
                <S.Label htmlFor={content}>내용<S.Asterisk>*</S.Asterisk></S.Label>
            </S.LabelWrapper>
            <S.ContentTextArea
                placeholder="약속 시간, 준비물, 실력 등 플레이를 위한 정보를 적어주세요"
                value={content}
                onChange={handleChangeContent} />
        </S.Form>
    )
}

export default Form;