import { css } from '@emotion/react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

import * as S from './MyProfile.style';

import Button from '@/components/common/Button';
import DirectiveMsg from '@/components/common/DirectiveMsg';
import Input from '@/components/common/Input';
import Header from '@/components/MyPage/Header';
import { signupFormData } from '@/constants/form';
import { useInput } from '@/hooks/useInput';
import { userState } from '@/recoil/atoms/user';
import theme from '@/styles/theme';
import { checkNickname } from '@/utils/regex';

const MyProfile = () => {
    const [user, setUser] = useRecoilState(userState);
    const [isDisabled, setIsDisabled] = useState(true);

    const {
        value: nickname,
        setValue: setNickname,
        onChange: handleChangeNickname,
    } = useInput(user.nickname, (targetValue: string) => {
        setNickname(targetValue);
    });

    const handleEdit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <S.MyProfile>
            <Header title="프로필 수정" />
            <S.EditForm>
                <S.ImageWrapper>
                    <S.ProfileImage src={user.profileImage} alt="profile" />
                </S.ImageWrapper>
                <Input
                    name="별명"
                    type="text"
                    placeholder="6자 이내의 한글, 영문, 숫자로 입력해주세요"
                    value={nickname}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeNickname(e)
                    }
                    success={nickname.length > 0 && checkNickname(nickname)}
                    error={nickname.length > 0 && !checkNickname(nickname)}
                />
                {nickname.length > 0 && !checkNickname(nickname) && (
                    <DirectiveMsg active={checkNickname(nickname)}>
                        {signupFormData[1].directive}
                    </DirectiveMsg>
                )}
                <S.ButtonWrapper>
                    <Button
                        type="submit"
                        size="md"
                        css={css`
                            border: 1px solid
                                ${isDisabled
                                    ? theme.color.gray
                                    : theme.color.white};
                            color: ${isDisabled
                                ? theme.color.navy
                                : theme.color.white};
                        `}
                        backgroundColor={
                            isDisabled ? theme.color.white : theme.color.navy
                        }
                        isDisabled={isDisabled}
                        onClick={(e: React.SyntheticEvent<HTMLFormElement>) =>
                            handleEdit(e)
                        }
                    >
                        변경
                    </Button>
                </S.ButtonWrapper>
            </S.EditForm>
        </S.MyProfile>
    );
};

export default MyProfile;
