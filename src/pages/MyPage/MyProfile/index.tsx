import { css } from '@emotion/react';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import * as S from './MyProfile.style';

import { patchMyInfo, postMyImageFile } from '@/apis/mypage';
import Button from '@/components/common/Button';
import DirectiveMsg from '@/components/common/DirectiveMsg';
import I from '@/components/common/Icons';
import Input from '@/components/common/Input';
import Header from '@/components/MyPage/Header';
import { signupFormData } from '@/constants/form';
import { useInput } from '@/hooks/useInput';
import { userState } from '@/recoil/atoms/user';
import theme from '@/styles/theme';
import { checkNickname } from '@/utils/regex';

const MyProfile = () => {
    const [user, setUser] = useRecoilState(userState);
    const [profileImage, setProfileImage] = useState(user.profile_image);

    const [isDisabled, setIsDisabled] = useState(true);

    const {
        value: nickname,
        setValue: setNickname,
        onChange: handleChangeNickname,
        onClear: handleNicknameClear,
    } = useInput(user.nickname, (targetValue: string) => {
        setNickname(targetValue);

        if (targetValue === user.nickname || !checkNickname(targetValue)) {
            setIsDisabled(true);
            return;
        }

        setIsDisabled(false);
    });

    const fetchImageFile = useMutation(postMyImageFile, {
        onSuccess: (imageUrl: string) => {
            if (imageUrl) {
                setProfileImage(imageUrl);
                setUser({ ...user, profile_image: imageUrl });
            }
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const fetchMyInfo = useMutation(patchMyInfo, {
        onSuccess: (code: string) => {
            if (code) {
                setUser({ ...user, nickname });
            }
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const handleImageUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { files } = e.target as HTMLInputElement;

        if (files) {
            fetchImageFile.mutate(files[0]);
        }
    };

    const handleEdit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchMyInfo.mutate(nickname);
    };

    return (
        <S.MyProfile>
            <Header title="프로필 수정" />
            <S.EditForm>
                <S.ImageWrapper>
                    <S.ProfileImage src={profileImage} alt="profile" />
                    <S.ProfileForm>
                        <S.ImageButton
                            accept="image/*"
                            id="image-button"
                            onChange={(e: React.ChangeEvent) =>
                                handleImageUpdate(e)
                            }
                            type="file"
                        />

                        <S.ImageLabel htmlFor="image-button">
                            <I.Setting
                                color={theme.color.white}
                                fontSize={0.8}
                            />
                        </S.ImageLabel>
                    </S.ProfileForm>
                </S.ImageWrapper>
                <Input
                    width={20.375}
                    name="별명"
                    type="text"
                    placeholder="6자 이내의 한글, 영문, 숫자로 입력해주세요"
                    value={nickname}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeNickname(e)
                    }
                    success={nickname.length > 0 && checkNickname(nickname)}
                    error={nickname.length > 0 && !checkNickname(nickname)}
                    onClear={handleNicknameClear}
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
