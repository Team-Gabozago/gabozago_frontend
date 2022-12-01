import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './Login.style';

import { postLoginUser } from '@/apis/user';
import Button from '@/components/common/Button';
import DirectiveMsg from '@/components/common/DirectiveMsg';
import Input from '@/components/common/Input';
import GlobalModal from '@/components/GlobalModal';
import ModalContent from '@/components/ModalContent';
import {
    FAIL_PASSWORD_WRONG,
    FAIL_USER_NOT_FOUND,
    SUCCESS_LOGIN,
} from '@/constants/code';
import { signupFormData } from '@/constants/form';
import { useInput } from '@/hooks/useInput';
import theme from '@/styles/theme';
import { checkEmail, checkPassword } from '@/utils/regex';

const LoginPage = () => {
    const navigate = useNavigate();

    const [isDisabled, setIsDisabled] = useState(true);
    const [isFailModal, setIsFailModal] = useState(false);
    const [modalText, setModalText] = useState({
        title: '',
        description: '',
    });

    const fetchSignupUser = useMutation(postLoginUser, {
        onSuccess: (code: string) => {
            if (code === SUCCESS_LOGIN) {
                navigate('/home');
            } else if (code === FAIL_PASSWORD_WRONG) {
                setModalText({
                    title: '비밀번호를 확인해 주세요!',
                    description: '해당 이메일에 등록된 비밀번호가 아니에요.',
                });
                setIsFailModal(true);
            } else if (code === FAIL_USER_NOT_FOUND) {
                setModalText({
                    title: '이메일을 확인해 주세요!',
                    description: '해당 이메일로 등록된 회원이 없어요.',
                });
                setIsFailModal(true);
            }
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const checkEmailAndPassword = (email: string, password: string) => {
        if (checkEmail(email) && checkPassword(password)) setIsDisabled(false);
        else setIsDisabled(true);
    };

    const {
        value: email,
        setValue: setEmail,
        onChange: handleChangeEmail,
    } = useInput('', (targetValue: string) => {
        setEmail(targetValue);
    });

    const {
        value: password,
        setValue: setPassword,
        onChange: handleChangePassword,
    } = useInput('', (targetValue: string) => {
        setPassword(targetValue);
    });

    const handleLogin = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = {
            email,
            password,
        };
        fetchSignupUser.mutate(user);
    };

    useEffect(() => {
        checkEmailAndPassword(email, password);
    }, [email, password]);

    return (
        <>
            <S.LoginWrapper>
                <S.TitleWrppaer>
                    <S.Title>오늘도 원투!</S.Title>
                    <S.Title>운동친구 찾기</S.Title>
                    <S.Title>#가보자고</S.Title>
                </S.TitleWrppaer>
                <S.LoginForm>
                    <Input
                        name="이메일"
                        type="email"
                        placeholder="이메일을 입력해주세요"
                        value={email}
                        onChange={handleChangeEmail}
                        tabIndex="1"
                    />
                    {email.length > 0 && !checkEmail(email) && (
                        <DirectiveMsg active={checkEmail(email)}>
                            {signupFormData[2].directive}
                        </DirectiveMsg>
                    )}
                    <Input
                        name="비밀번호"
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                        value={password}
                        onChange={handleChangePassword}
                        tabIndex="2"
                        onFocus={false}
                    />
                    {password.length > 0 && !checkPassword(password) && (
                        <DirectiveMsg active={checkPassword(password)}>
                            {signupFormData[3].directive}
                        </DirectiveMsg>
                    )}
                    <S.ButtonWrapper>
                        <Button
                            type="submit"
                            size="md"
                            backgroundColor={
                                isDisabled
                                    ? theme.color.white
                                    : theme.color.navy
                            }
                            backgroundImage={
                                !isDisabled ? theme.color.gradient : ''
                            }
                            disabled={isDisabled}

                            onClick={(e: React.MouseEvent<HTMLFormElement>) => handleLogin(e)}
                        >
                            <S.ButtonText isDisabled={isDisabled}>
                                로그인
                            </S.ButtonText>
                        </Button>
                    </S.ButtonWrapper>
                </S.LoginForm>
            </S.LoginWrapper>
            {isFailModal && (
                <GlobalModal
                    size="small"
                    handleCancelClick={() => setIsFailModal(false)}
                >
                    <ModalContent
                        title={modalText.title}
                        description={modalText.description}
                        buttonText="다시 시도"
                        handleButtonClick={() => setIsFailModal(false)}
                    />
                </GlobalModal>
            )}
        </>
    );
};

export default LoginPage;
