import { css } from '@emotion/react';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { patchMyInfo, postMyImageFile } from '@/apis/mypage';
import Button from '@/components/common/Button';
import DirectiveMsg from '@/components/common/DirectiveMsg';
import I from '@/components/common/Icons';
import Input from '@/components/common/Input';
import GlobalModal from '@/components/GlobalModal';
import ModalContent from '@/components/ModalContent';
import Header from '@/components/MyPage/Header';
import {
    PROFILE_UPDATED,
    IMAGE_UPLOADED,
    COMMON_INVALID_PARAMETER,
} from '@/constants/code';
import { signupFormData } from '@/constants/form';
import { useInput } from '@/hooks/useInput';
import { userState } from '@/recoil/atoms/user';
import theme from '@/styles/theme';
import { checkNickname } from '@/utils/regex';

const MyEditProfile = () => {
    const navigate = useNavigate();

    const [user, setUser] = useRecoilState(userState);
    const [modalText, setModalText] = useState({
        title: '',
        description: '',
        buttonText: '',
        handleButtonClick: () => true,
    });
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
            if (code === COMMON_INVALID_PARAMETER) {
                setModalText({
                    title: '닉네임 중복입니다.',
                    description: '닉네임이 변경 실패.',
                    buttonText: '확인',
                    handleButtonClick: () => {
                        setIsModal(false);
                        return true;
                    },
                });
            }
            if (code === PROFILE_UPDATED) {
                setUser({ ...user, nickname });
                setModalText({
                    title: '변경이 완료되었습니다.',
                    description: '닉네임이 성공적으로 변경 되었습니다.',
                    buttonText: '확인',
                    handleButtonClick: () => {
                        navigate('/mypage');
                        return true;
                    },
                });
            }
            setIsModal(true);
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
    };

    return (
        <>
            <section>
                <Header title="프로필 수정" />
                <form className="flex flex-col items-center gap-4">
                    <div className="flex justify-center mt-[2.625rem] pb-4 relative">
                        <img
                            className="w-[7.5rem] h-[7.5rem] rounded-full bg-gray"
                            src={user.profile_image}
                            alt="profile"
                        />
                        <div className="w-7 h-7 flex justify-center items-center absolute bottom-4 right-0 rounded-full bg-navy">
                            <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                id="image-button"
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => handleImageUpdate(e)}
                            />

                            <label
                                className="cursor-pointer"
                                htmlFor="image-button"
                            >
                                <I.Setting
                                    color={theme.color.white}
                                    fontSize={0.8}
                                />
                            </label>
                        </div>
                    </div>
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
                    <div className="mt-[5.5rem]">
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
                    </div>
                </form>
            </section>
            {isModal && (
                <GlobalModal
                    size="small"
                    handleCancelClick={() => setIsModal(false)}
                >
                    <ModalContent
                        title={modalText.title}
                        description={modalText.description}
                        buttonText={modalText.buttonText}
                        handleButtonClick={modalText.handleButtonClick}
                    />
                </GlobalModal>
            )}
        </>
    );
};

export default MyEditProfile;
