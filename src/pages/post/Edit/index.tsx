import { ChangeEvent, useState } from 'react';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import theme from '@/styles/theme';

const Edit = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [myImage, setMyimage] = useState<string[]>([]);
    const handleEdit = (e: React.SyntheticEvent<HTMLFormElement>) => {};
    const addImage = (e: ChangeEvent<HTMLInputElement>) => {
        const nowSelectImageList = e.target.files; // 한번에 받은 파일리스트
        const nowImageURLList = [...myImage]; // 현재 myImage 복사
        if (!nowSelectImageList) return null;
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < nowSelectImageList.length; i++) {
            // FileList는 map 안됨
            const nowImageUrl = URL.createObjectURL(nowSelectImageList[i]);
            // 미리보기 가능하게 변수화
            nowImageURLList.push(nowImageUrl);
        }
        setMyimage(nowImageURLList);
    };
    return (
        <div>
            <form>
                <ul>
                    <li>
                        <Input
                            name="운동"
                            type="text"
                            placeholder="함께 할 운동을 선택해 주세요"
                        />
                    </li>
                    <li>
                        <Input
                            name="제목"
                            type="text"
                            placeholder="운동 이름, 구하는 친구 수, 장소 등이 드러나면 좋아요"
                        />
                    </li>
                    <li>
                        <Input
                            name="운동 장소"
                            type="text"
                            placeholder="운동 장소를 검색해 보세요"
                            disabled
                        />
                    </li>
                    <li>
                        <Input
                            name="장소 상세"
                            type="text"
                            placeholder="호수, ⃝⃝ 앞 등 상세 장소 정보를 적어주세요"
                        />
                    </li>
                    <li>
                        <label htmlFor="내용">내용</label>
                        <textarea
                            name="내용"
                            placeholder="약속 시간, 준비물, 실력 등 플레이를 위한 정보를 적어주세요"
                        />
                    </li>
                    <li>
                        <div>
                            이미지 첨부
                            <span>최대 5장</span>
                        </div>
                        <label htmlFor="file">
                            <input
                                type="file"
                                multiple
                                id="file"
                                accept=".jpg,.jpeg,.png"
                                onChange={addImage}
                            />
                        </label>
                        {myImage.map((cur, idx) => {
                            const mapkey = `file${idx}`;
                            console.log(cur);
                            return (
                                <img src={cur} key={mapkey} alt="이미지파일" />
                            );
                        })}
                    </li>
                </ul>
                <Button
                    type="submit"
                    size="md"
                    backgroundColor={
                        isDisabled ? theme.color.white : theme.color.lightBlack
                    }
                    isDisabled={isDisabled}
                    onClick={(e: React.SyntheticEvent<HTMLFormElement>) =>
                        handleEdit(e)
                    }
                >
                    완료
                </Button>
            </form>
        </div>
    );
};

export default Edit;
