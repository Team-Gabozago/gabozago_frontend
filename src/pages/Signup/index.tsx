import { css } from '@emotion/react';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './Signup.stlye';

import { postUser } from '@/apis/user';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { signupFormData } from '@/constants/form';
import { useInput } from '@/hooks/useInput';
import theme from '@/styles/theme';

const checkName = (name: string) => {
    const regex = /^[가-힣a-zA-Z]+$/;
    return regex.test(name);
};

const checkNickname = (nickname: string) => {
    const regex = /^[가-힣|a-z|A-Z|0-9|]{1,6}$/;

    return regex.test(nickname);
};

const checkEmail = (email: string) => {
    const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return regex.test(email);
};

const checkPassword = (password: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,25}$/;
    return regex.test(password);
};

const checkPassword2 = (password: string, password2: string) =>
    password === password2;

const checkTel = (tel: string) => {
    const regex = /^01([0|1|6|7|8|9])[0-9]{8}$/g;
    return regex.test(tel);
};

/**
 * State 정리
 * level : 현재 어떤 input들을 체킹 하는지 확인 변수 (0 ~ 5 까지 존재.) : number
 * isDisabled : 버튼의 disiabled 속성을 컨트롤 하는 변수 : boolean
 * form: Form 내에서의 모든 인풋을 정상적으로 입력했는지 체킹: boolean[]
 */
const SignupPage = () => {
    const navigate = useNavigate();

    const fetchPostUser = useMutation(postUser, {
        onSuccess: (data: { member_id: number }) => {
            if (data.member_id) {
                // 성공 popup 띄우기.
                navigate('/home');
            }
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const [level, setLevel] = useState(0);
    const [isDisabled, setIsDisabled] = useState(true);
    const [form, setForm] = useState<boolean[]>(new Array(6).fill(false));

    const checkDisableButton = (
        paramsLevel: number, // 어떤 인풋인지 체킹
        targetValue: string, // 입력한 인풋의 value
        checkFunc: (checkParam: string, checkParam2?: string) => boolean // 입력한 값을 체킹하는 callbackFunc
    ) => {
        let newForm = [...form];

        if (checkFunc(targetValue)) {
            newForm = newForm.map((v, idx) => {
                if (idx === paramsLevel) return true;
                return v;
            });
            setForm(newForm);
        } else {
            newForm = newForm.map((v, idx) => {
                if (idx === paramsLevel) return false;
                return v;
            });
            setForm(newForm);
        }

        return newForm.slice(0, level + 1).every(value => value === true)
            ? setIsDisabled(false)
            : setIsDisabled(true);
    };

    const {
        value: name,
        setValue: setName,
        onChange: handleChangeName,
    } = useInput('', (targetValue: string) => {
        setName(targetValue);

        checkDisableButton(0, targetValue, () => checkName(targetValue));
    });

    const {
        value: nickname,
        setValue: setNickName,
        onChange: handleChangeNickname,
    } = useInput('', (targetValue: string) => {
        setNickName(targetValue);

        checkDisableButton(1, targetValue, () => checkNickname(targetValue));
    });

    const {
        value: email,
        setValue: setEmail,
        onChange: handleChangeEmail,
    } = useInput('', (targetValue: string) => {
        setEmail(targetValue);

        checkDisableButton(2, targetValue, () => checkEmail(targetValue));
    });

    const {
        value: password,
        setValue: setPassword,
        onChange: handleChangePassword,
    } = useInput('', (targetValue: string) => {
        setPassword(targetValue);

        checkDisableButton(3, targetValue, () => checkPassword(targetValue));
    });

    const {
        value: password2,
        setValue: setPassword2,
        onChange: handleChangePassword2,
    } = useInput('', (targetValue: string) => {
        setPassword2(targetValue);

        checkDisableButton(4, targetValue, () =>
            checkPassword2(password, targetValue)
        );
    });

    const {
        value: tel,
        setValue: setTel,
        onChange: handleChangeTel,
    } = useInput('', (targetValue: string) => {
        setTel(targetValue);

        checkDisableButton(5, targetValue, () => checkTel(targetValue));
    });

    const handleNextButton = () => {
        setLevel(level + 1);
        setIsDisabled(true);
    };

    const handleSignup = (e: React.SyntheticEvent<HTMLFormElement>) => {
        if (level < 5) return;

        e.preventDefault();
        // useMutatin post api.
        const newUser = {
            name,
            nickname,
            email,
            password,
            password2,
            tel,
        };

        fetchPostUser.mutate(newUser);
    };

    const handleOnKeyUp = (e: React.KeyboardEvent) => {
        if (e.code === 'Enter' && !isDisabled) {
            handleNextButton();
        }
    };

    return (
        <S.SignupWrapper>
            <S.SignupForm>
                <S.Title>{signupFormData[level].title}</S.Title>
                {level >= 5 && (
                    <>
                        <Input
                            name="전화번호"
                            type="tel"
                            placeholder="띄어쓰기나 기호 없이 숫자만 입력해주세요. Ex) 01025486707"
                            value={tel}
                            tabIndex="-5"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => handleChangeTel(e)}
                            onKeyUp={(e: React.KeyboardEvent) =>
                                handleOnKeyUp(e)
                            }
                        />
                        {tel.length > 0 && !checkTel(tel) && (
                            <S.DirectiveMsg active={checkTel(tel)}>
                                {signupFormData[5].directive}
                            </S.DirectiveMsg>
                        )}
                    </>
                )}
                {level >= 4 && (
                    <>
                        <Input
                            name="비밀번호 확인"
                            type="password"
                            placeholder="비밀번호를 한 번 더 입력해주세요"
                            value={password2}
                            tabIndex="-4"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => handleChangePassword2(e)}
                            onKeyUp={(e: React.KeyboardEvent) =>
                                handleOnKeyUp(e)
                            }
                        />
                        {password2.length > 0 &&
                            !checkPassword2(password, password2) && (
                                <S.DirectiveMsg
                                    active={checkPassword2(password, password2)}
                                >
                                    {signupFormData[4].directive}
                                </S.DirectiveMsg>
                            )}
                    </>
                )}
                {level >= 3 && (
                    <>
                        <Input
                            name="비밀번호"
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                            value={password}
                            tabIndex="-3"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => handleChangePassword(e)}
                            onKeyUp={(e: React.KeyboardEvent) =>
                                handleOnKeyUp(e)
                            }
                        />
                        {password.length > 0 && !checkPassword(password) && (
                            <S.DirectiveMsg active={checkPassword(password)}>
                                {signupFormData[3].directive}
                            </S.DirectiveMsg>
                        )}
                    </>
                )}
                {level >= 2 && (
                    <>
                        <Input
                            name="이메일"
                            type="email"
                            placeholder="이메일을 입력해주세요"
                            value={email}
                            tabIndex="-2"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => handleChangeEmail(e)}
                            onKeyUp={(e: React.KeyboardEvent) =>
                                handleOnKeyUp(e)
                            }
                        />
                        {email.length > 0 && !checkEmail(email) && (
                            <S.DirectiveMsg
                                active={checkEmail(email)}
                                css={css`
                                    margin-bottom: -1.5rem;
                                `}
                            >
                                {signupFormData[2].directive}
                            </S.DirectiveMsg>
                        )}
                        <S.EmailButtonWrapper>
                            <S.EmailCheckButton type="button">
                                중복 확인
                            </S.EmailCheckButton>
                        </S.EmailButtonWrapper>
                    </>
                )}
                {level >= 1 && (
                    <>
                        <Input
                            name="별명"
                            type="text"
                            placeholder="6자 이내의 한글, 영문, 숫자로 입력해주세요"
                            value={nickname}
                            tabIndex="-1"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => handleChangeNickname(e)}
                            onKeyUp={(e: React.KeyboardEvent) =>
                                handleOnKeyUp(e)
                            }
                        />
                        {nickname.length > 0 && !checkNickname(nickname) && (
                            <S.DirectiveMsg active={checkNickname(nickname)}>
                                {signupFormData[1].directive}
                            </S.DirectiveMsg>
                        )}
                    </>
                )}
                <>
                    <Input
                        name="이름"
                        type="text"
                        placeholder="한글, 영문만 입력해주세요."
                        value={name}
                        tabIndex="0"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleChangeName(e)
                        }
                        onKeyUp={(e: React.KeyboardEvent) => handleOnKeyUp(e)}
                    />
                    {name.length > 0 && !checkName(name) && (
                        <S.DirectiveMsg active={checkName(name)}>
                            {signupFormData[0].directive}
                        </S.DirectiveMsg>
                    )}
                </>
                <S.ButtonWrapper>
                    <Button
                        type="submit"
                        size="md"
                        backgroundColor={theme.color.blue}
                        disabled={isDisabled}
                        onClick={
                            level < 5
                                ? handleNextButton
                                : (e: React.SyntheticEvent<HTMLFormElement>) =>
                                      handleSignup(e)
                        }
                    >
                        {level < 5 ? '다음' : '가입하기'}
                    </Button>
                </S.ButtonWrapper>
            </S.SignupForm>
        </S.SignupWrapper>
    );
};

export default SignupPage;
