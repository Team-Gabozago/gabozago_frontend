import { css } from '@emotion/react';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import * as S from './MyProfile.style';

import { patchMyInfo, postMyImageFile } from '@/apis/mypage';
import Button from '@/components/common/Button';
import DirectiveMsg from '@/components/common/DirectiveMsg';
import I from '@/components/common/Icons';
import Input from '@/components/common/Input';
import GlobalModal from '@/components/GlobalModal';
import ModalContent from '@/components/ModalContent';
import Header from '@/components/MyPage/Header';
import { PROFILE_UPDATED, IMAGE_UPLOADED } from '@/constants/code';
import { signupFormData } from '@/constants/form';
import { useInput } from '@/hooks/useInput';
import { userState } from '@/recoil/atoms/user';
import theme from '@/styles/theme';
import { checkNickname } from '@/utils/regex';

const MyProfile = () => {
    const navigate = useNavigate();

    const [user, setUser] = useRecoilState(userState);
    const [isModal, setIsModal] = useState(false);
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

    const fetchPostImageFile = useMutation(postMyImageFile, {
        onSuccess: async ({
            code,
            profileImage,
        }: {
            code: string;
            profileImage: string;
        }) => {
            if (code === IMAGE_UPLOADED) {
                setUser({ ...user, profile_image: profileImage });
            }
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const fetchMyInfo = useMutation(patchMyInfo, {
        onSuccess: (code: string) => {
            if (code === PROFILE_UPDATED) {
                setUser({ ...user, nickname });
                setIsModal(true);
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
            fetchPostImageFile.mutate(files[0]);
        }
    };

    const handleEdit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (nickname === user.nickname) return;
        fetchMyInfo.mutate(nickname);
        setIsModal(true);
    };

    return (
        <>
            <S.MyProfile>
                <Header title="프로필 수정" />
                <S.EditForm>
                    <S.ImageWrapper>
                        <S.ProfileImage
                            src={user.profile_image}
                            alt="profile"
                        />
                        <S.ProfileForm>
                            <S.ImageButton
                                accept="image/*"
                                id="image-button"
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => handleImageUpdate(e)}
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
                                isDisabled
                                    ? theme.color.white
                                    : theme.color.navy
                            }
                            isDisabled={isDisabled}
                            onClick={(
                                e: React.SyntheticEvent<HTMLFormElement>
                            ) => handleEdit(e)}
                        >
                            변경
                        </Button>
                    </S.ButtonWrapper>
                </S.EditForm>
            </S.MyProfile>
            {isModal && (
                <GlobalModal
                    size="small"
                    handleCancelClick={() => setIsModal(false)}
                >
                    <ModalContent
                        title="변경이 완료되었습니다."
                        description="닉네임이 성공적으로 변경 되었습니다."
                        buttonText="확인"
                        handleButtonClick={() => navigate('/mypage')}
                    />
                </GlobalModal>
            )}
        </>
    );
};

export default MyProfile;
