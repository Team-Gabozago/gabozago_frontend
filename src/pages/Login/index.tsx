import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './Login.style';

import { postLoginUser } from '@/apis/user';
import Button from '@/components/common/Button';
import DirectiveMsg from '@/components/common/DirectiveMsg';
import Input from '@/components/common/Input';
import { signupFormData } from '@/constants/form';
import { useInput } from '@/hooks/useInput';
import theme from '@/styles/theme';
import { checkEmail, checkPassword } from '@/utils/regex';

const LoginPage = () => {
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(true);

    const fetchSignupUser = useMutation(postLoginUser, {
        onSuccess: (data: { member_id: number }) => {
            if (data.member_id) {
                navigate('/home');
            } else {
                // 일치하지 않는 popup 띄우기.
            }
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const checkEmailAndPassword = (email: string, password: string) => {
        if (checkEmail(email) && checkPassword(password)) setIsDisabled(false);
        else setIsDisabled(true);
    }

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

    const handleLogin = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = {
            email,
            password
        }
        fetchSignupUser.mutate(user);
    }

    useEffect(() => {
        checkEmailAndPassword(email, password);
    }, [email, password])

    return (
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
                />
                {email.length > 0 && !checkEmail(email) && (
                    <DirectiveMsg
                        active={checkEmail(email)}
                    >
                        {signupFormData[2].directive}
                    </DirectiveMsg>
                )}
                <Input
                    name="비밀번호"
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    value={password}
                    onChange={handleChangePassword}
                />
                {password.length > 0 &&
                    !checkPassword(password) && (
                        <DirectiveMsg
                            active={checkPassword(password)}
                        >
                            {signupFormData[3].directive}
                        </DirectiveMsg>
                    )}
                <S.ButtonWrapper>
                    <Button type="submit" size="md" backgroundColor={isDisabled ? theme.color.gray : theme.color.blue} isDisabled={isDisabled} onClick={(e: React.SyntheticEvent<HTMLFormElement>) => handleLogin(e)}>로그인</Button>
                </S.ButtonWrapper>
            </S.LoginForm>

        </S.LoginWrapper>
    )
}



export default LoginPage;