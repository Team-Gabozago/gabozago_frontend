import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './Password.style';

import { checkMyPassword, patchMyPassword } from '@/apis/mypage';
import Button from '@/components/common/Button';
import DirectiveMsg from '@/components/common/DirectiveMsg';
import Input from '@/components/common/Input';
import GlobalModal from '@/components/GlobalModal';
import ModalContent from '@/components/ModalContent';
import Header from '@/components/MyPage/Header';
import {
    PASSWORD_CORRECT,
    PASSWORD_INCORRECT,
    PASSWORD_CHANGED,
} from '@/constants/code';
import { signupFormData } from '@/constants/form';
import { useInput } from '@/hooks/useInput';
import theme from '@/styles/theme';
import { checkPassword, checkPassword2 } from '@/utils/regex';

const PasswordPage = () => {
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(true);
    const [isCheckCurrentPassword, setIsCheckCurrentPassword] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [isModal, setIsModal] = useState(false);
    const [modalText, setModalText] = useState({
        title: '',
        description: '',
        buttonText: '',
    });

    const fetchCheckPasswordUser = useMutation(checkMyPassword, {
        onSuccess: (code: string) => {
            if (code === PASSWORD_CORRECT) {
                setIsCheckCurrentPassword(true); // 비밀번호 변경으로 넘어가기
                setIsDisabled(true); // 버튼 비활성화 풀기
            } else if (code === PASSWORD_INCORRECT) {
                setModalText({
                    title: '사용 중인 비밀번호와 달라요.',
                    description: '현재 비밀번호를 바르게 입력해주세요.',
                    buttonText: '확인',
                });
                setIsModal(true);
            }
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const fetchPatchMyPassword = useMutation(patchMyPassword, {
        // TODO 응답 데이터 변경 예정.
        onSuccess: (code: string) => {
            if (code === PASSWORD_CHANGED) {
                setModalText({
                    title: '비밀번호가 변경되었어요.',
                    description: '잊지 않게 다시 로그인해 볼까요?',
                    buttonText: '다시 로그인',
                });
                setIsModal(true);
            }
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const {
        value: currentPassword,
        setValue: setCurrentPassword,
        onChange: handleChangeCurrentPassword,
        onClear: handleCurrentPasswordClear,
    } = useInput('', (targetValue: string) => {
        setCurrentPassword(targetValue);

        if (checkPassword(targetValue)) setIsDisabled(false);
        else setIsDisabled(true);
    });

    const {
        value: newPassword,
        setValue: setNewPassword,
        onChange: handleChangeNewPassword,
        onClear: handleNewPasswordClear,
    } = useInput('', (targetValue: string) => {
        setNewPassword(targetValue);
    });

    const {
        value: newPassword2,
        setValue: setNewPassword2,
        onChange: handleChangeNewPassword2,
        onClear: handleNewPassword2Clear,
    } = useInput('', (targetValue: string) => {
        setNewPassword2(targetValue);
    });

    const handleNextButton = async (
        e: React.SyntheticEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (!isCheckCurrentPassword) {
            fetchCheckPasswordUser.mutate(currentPassword);
        }
    };

    const handleModifyPassword = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchPatchMyPassword.mutate({ currentPassword, newPassword });
    };

    useEffect(() => {
        if (newPassword === '' || newPassword2 === '') return;
        if (checkPassword2(newPassword, newPassword2)) {
            setIsDisabled(false);
            setIsComplete(true);
        } else setIsDisabled(true);
    }, [newPassword, newPassword2]);

    return (
        <>
            <S.PasswordPage>
                <Header title="비밀번호 변경" />
                <S.PasswordForm>
                    <>
                        {isCheckCurrentPassword ? (
                            <>
                                <Input
                                    name="새 비밀번호"
                                    type="password"
                                    placeholder="대소문자, 숫자 포함 6자리 이상 입력해주세요."
                                    value={newPassword}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => handleChangeNewPassword(e)}
                                    success={
                                        newPassword.length > 0 &&
                                        checkPassword(newPassword)
                                    }
                                    error={
                                        newPassword.length > 0 &&
                                        !checkPassword(newPassword)
                                    }
                                    onClear={handleNewPasswordClear}
                                />
                                <Input
                                    name="새 비밀번호 확인"
                                    type="password"
                                    placeholder="새 비밀번호를 한 번더 입력해주세요"
                                    value={newPassword2}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => handleChangeNewPassword2(e)}
                                    success={
                                        newPassword2.length > 0 &&
                                        checkPassword(newPassword2)
                                    }
                                    error={
                                        newPassword2.length > 0 &&
                                        !checkPassword(newPassword2)
                                    }
                                    onClear={handleNewPassword2Clear}
                                    autoFocus={false}
                                />
                            </>
                        ) : (
                            <Input
                                name="현재 비밀번호"
                                type="password"
                                placeholder="현재 사용 중인 비밀번호를 입력해주세요"
                                value={currentPassword}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => handleChangeCurrentPassword(e)}
                                success={
                                    currentPassword.length > 0 &&
                                    checkPassword(currentPassword)
                                }
                                error={
                                    currentPassword.length > 0 &&
                                    !checkPassword(currentPassword)
                                }
                                onClear={handleCurrentPasswordClear}
                            />
                        )}
                        {currentPassword.length > 0 &&
                            !checkPassword(currentPassword) && (
                                <DirectiveMsg
                                    active={checkPassword(currentPassword)}
                                >
                                    <span>{signupFormData[3].directive}</span>
                                </DirectiveMsg>
                            )}
                        <S.ButtonWrapper>
                            <Button
                                type="submit"
                                size="md"
                                backgroundColor={
                                    !isDisabled
                                        ? theme.color.navy
                                        : theme.color.white
                                }
                                disabled={isDisabled}
                                onClick={
                                    isComplete
                                        ? (
                                              e: React.SyntheticEvent<HTMLFormElement>
                                          ) => handleModifyPassword(e)
                                        : (
                                              e: React.SyntheticEvent<HTMLFormElement>
                                          ) => handleNextButton(e)
                                }
                            >
                                <S.ButtonText
                                    color={
                                        isDisabled
                                            ? theme.color.black
                                            : theme.color.white
                                    }
                                >
                                    {isCheckCurrentPassword ? '변경' : '다음'}
                                </S.ButtonText>
                            </Button>
                        </S.ButtonWrapper>
                    </>
                </S.PasswordForm>
            </S.PasswordPage>
            {isModal && (
                <GlobalModal
                    size="small"
                    handleCancelClick={() => setIsModal(false)}
                >
                    <ModalContent
                        title={modalText.title}
                        description={modalText.description}
                        buttonText={modalText.buttonText}
                        handleButtonClick={() => {
                            localStorage.removeItem('accessToken');
                            if (isComplete) {
                                navigate('/login');
                            }
                            setIsModal(false);
                        }}
                    />
                </GlobalModal>
            )}
        </>
    );
};

export default PasswordPage;
