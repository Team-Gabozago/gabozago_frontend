import { css } from '@emotion/react';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { postSignupUser, duplicateEmail } from '@/apis/user';
import Button from '@/components/common/Button';
import DirectiveMsg from '@/components/common/DirectiveMsg';
import Input from '@/components/common/Input';
import GlobalModal from '@/components/GlobalModal';
import ModalContent from '@/components/ModalContent';
import ProgressBar from '@/components/ProgressBar';
import {
    AVAILABLE_EMAIL,
    DUPLICATED_EMAIL,
    DUPLICATED_NICKNAME,
    EMAIL_EXISTS,
    USER_CREATED,
} from '@/constants/code';
import { signupFormData } from '@/constants/form';
import { useInput } from '@/hooks/useInput';
import theme from '@/styles/theme';
import {
    checkName,
    checkNickname,
    checkEmail,
    checkPassword,
    checkPassword2,
    checkTel,
} from '@/utils/regex';

/**
 * State 정리
 * level : 현재 어떤 input들을 체킹 하는지 확인 변수 (0 ~ 5 까지 존재.) : number
 * isDisabled : 버튼의 disiabled 속성을 컨트롤 하는 변수 : boolean
 * form: Form 내에서의 모든 인풋을 정상적으로 입력했는지 체킹: boolean[]
 */
const SignupPage = () => {
    const navigate = useNavigate();

    const [isModal, setIsModal] = useState(false);
    const [modalInfo, setModalInfo] = useState({
        title: '',
        description: '',
        buttonText: '',
        signup: false,
    });
    const [level, setLevel] = useState(0);
    const [isDisabled, setIsDisabled] = useState(true);
    const [form, setForm] = useState<boolean[]>(new Array(6).fill(false));

    const fetchDupliateEmail = useMutation(duplicateEmail, {
        onSuccess: (code: string) => {
            // response 에 따라 팝업 내용 다르게 보여주기
            if (code === EMAIL_EXISTS) {
                setModalInfo({
                    ...modalInfo,
                    title: '이미 사용 중인 이메일이에요.',
                    description: '다른 이메일로 다시 시도해보세요.',
                    buttonText: '다시 시도',
                });
            } else if (code === AVAILABLE_EMAIL) {
                setModalInfo({
                    ...modalInfo,
                    title: '사용할 수 있는 이메일이에요.',
                    description: '',
                    buttonText: '확인',
                });
            }
            setIsModal(true);
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const fetchSignupUser = useMutation(postSignupUser, {
        onSuccess: (code: string) => {
            // USER_CREATED -> 다른 코드로 바꿔야함.
            if (code === USER_CREATED) {
                setModalInfo({
                    title: '가입이 완료되었어요!',
                    description: '우리 동네 운동 친구를 찾으러 가볼까요?',
                    buttonText: '원투 홈으로',
                    signup: true,
                });
            } else if (code === DUPLICATED_EMAIL) {
                setModalInfo({
                    ...modalInfo,
                    title: '이미 사용 중인 이메일이에요.',
                    description: '다른 이메일로 다시 시도해보세요.',
                    buttonText: '확인',
                });
            } else if (code === DUPLICATED_NICKNAME) {
                setModalInfo({
                    ...modalInfo,
                    title: '이미 사용 중인 닉네임이에요.',
                    description: '다른 닉네임으로 다시 시도해보세요.',
                    buttonText: '확인',
                });
            }
            setIsModal(true);
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

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
        onClear: handleNameClear,
    } = useInput('', (targetValue: string) => {
        setName(targetValue);

        checkDisableButton(0, targetValue, () => checkName(targetValue));
    });

    const {
        value: nickname,
        setValue: setNickName,
        onChange: handleChangeNickname,
        onClear: handleNicknameClear,
    } = useInput('', (targetValue: string) => {
        setNickName(targetValue);

        checkDisableButton(1, targetValue, () => checkNickname(targetValue));
    });

    const {
        value: email,
        setValue: setEmail,
        onChange: handleChangeEmail,
        onClear: handleEmailClear,
    } = useInput('', (targetValue: string) => {
        setEmail(targetValue);

        checkDisableButton(2, targetValue, () => checkEmail(targetValue));
    });

    const {
        value: password,
        setValue: setPassword,
        onChange: handleChangePassword,
        onClear: handlePasswordClear,
    } = useInput('', (targetValue: string) => {
        setPassword(targetValue);

        checkDisableButton(3, targetValue, () => checkPassword(targetValue));
    });

    const {
        value: password2,
        setValue: setPassword2,
        onChange: handleChangePassword2,
        onClear: handlePassword2Clear,
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
        onClear: handleTelClear,
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
            tel,
        };

        fetchSignupUser.mutate(newUser);
    };

    const handleOnKeyUp = (e: React.KeyboardEvent) => {
        if (e.code === 'Enter' && !isDisabled) {
            handleNextButton();
        }
    };

    const handleDuplicateEmailClick = () => {
        if (email === '') return;
        fetchDupliateEmail.mutate(email);
    };

    const checkAllForm = () =>
        checkName(name) &&
        checkNickname(nickname) &&
        checkEmail(email) &&
        checkPassword(password) &&
        checkPassword2(password, password2) &&
        checkTel(tel);

    return (
        <>
            <section>
                <ProgressBar
                    width={62.5 * (level + 1)}
                    backgroundColor={checkAllForm() ? 'gradient' : 'silver'}
                />
                <div className="pt-28 pb-15">
                    <div className="flex justify-center mb-8">
                        <h1 className="w-[18.5rem] text-title font-Spoqa-Han-Sans-Neo font-weight">
                            {signupFormData[level]?.title}
                        </h1>
                    </div>
                    <form className="flex flex-col items-center gap-4">
                        {level >= 5 && (
                            <>
                                <Input
                                    name="전화번호"
                                    type="text"
                                    placeholder="띄어쓰기나 기호 없이 숫자만 입력해주세요. Ex) 01025486707"
                                    value={tel}
                                    tabIndex="1"
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => handleChangeTel(e)}
                                    onKeyUp={(e: React.KeyboardEvent) =>
                                        handleOnKeyUp(e)
                                    }
                                    success={tel.length > 0 && checkTel(tel)}
                                    error={tel.length > 0 && !checkTel(tel)}
                                    onClear={handleTelClear}
                                />
                                {tel.length > 0 && (
                                    <DirectiveMsg active={checkTel(tel)}>
                                        {signupFormData[5].directive}
                                    </DirectiveMsg>
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
                                    tabIndex="2"
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => handleChangePassword2(e)}
                                    onKeyUp={(e: React.KeyboardEvent) =>
                                        handleOnKeyUp(e)
                                    }
                                    success={
                                        password2.length > 0 &&
                                        checkPassword2(password, password2)
                                    }
                                    error={
                                        password2.length > 0 &&
                                        !checkPassword2(password, password2)
                                    }
                                    onClear={handlePassword2Clear}
                                />
                                {password2.length > 0 && (
                                    <DirectiveMsg
                                        active={checkPassword2(
                                            password,
                                            password2
                                        )}
                                    >
                                        {signupFormData[4].directive}
                                    </DirectiveMsg>
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
                                    tabIndex="3"
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => handleChangePassword(e)}
                                    onKeyUp={(e: React.KeyboardEvent) =>
                                        handleOnKeyUp(e)
                                    }
                                    success={
                                        password.length > 0 &&
                                        checkPassword(password)
                                    }
                                    error={
                                        password.length > 0 &&
                                        !checkPassword(password)
                                    }
                                    onClear={handlePasswordClear}
                                />
                                {password.length > 0 && (
                                    <DirectiveMsg
                                        active={checkPassword(password)}
                                    >
                                        {signupFormData[3].directive}
                                    </DirectiveMsg>
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
                                    tabIndex="4"
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => handleChangeEmail(e)}
                                    onKeyUp={(e: React.KeyboardEvent) =>
                                        handleOnKeyUp(e)
                                    }
                                    success={
                                        email.length > 0 && checkEmail(email)
                                    }
                                    error={
                                        email.length > 0 && !checkEmail(email)
                                    }
                                    onClear={handleEmailClear}
                                />
                                {email.length > 0 && (
                                    <DirectiveMsg
                                        active={checkEmail(email)}
                                        css={css`
                                            margin-bottom: -1.5rem;
                                        `}
                                    >
                                        {signupFormData[2].directive}
                                    </DirectiveMsg>
                                )}
                                <div className="w-72 flex mb-4">
                                    <button
                                        className="w-20 h-7 p-1 text-xs rounded-md text-white bg-gray"
                                        type="button"
                                        onClick={handleDuplicateEmailClick}
                                        tabIndex={-1}
                                    >
                                        중복 확인
                                    </button>
                                </div>
                            </>
                        )}
                        {level >= 1 && (
                            <>
                                <Input
                                    name="별명"
                                    type="text"
                                    placeholder="6자 이내의 한글, 영문, 숫자로 입력해주세요"
                                    value={nickname}
                                    tabIndex="5"
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => handleChangeNickname(e)}
                                    onKeyUp={(e: React.KeyboardEvent) =>
                                        handleOnKeyUp(e)
                                    }
                                    success={
                                        nickname.length > 0 &&
                                        checkNickname(nickname)
                                    }
                                    error={
                                        nickname.length > 0 &&
                                        !checkNickname(nickname)
                                    }
                                    onClear={handleNicknameClear}
                                />
                                {nickname.length > 0 && (
                                    <DirectiveMsg
                                        active={checkNickname(nickname)}
                                    >
                                        {signupFormData[1].directive}
                                    </DirectiveMsg>
                                )}
                            </>
                        )}
                        <Input
                            name="이름"
                            type="text"
                            placeholder="한글, 영문만 입력해주세요."
                            value={name}
                            tabIndex="6"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => handleChangeName(e)}
                            onKeyUp={(e: React.KeyboardEvent) =>
                                handleOnKeyUp(e)
                            }
                            success={name.length > 0 && checkName(name)}
                            error={name.length > 0 && !checkName(name)}
                            onClear={handleNameClear}
                        />
                        {name.length > 0 && (
                            <DirectiveMsg active={checkName(name)}>
                                {signupFormData[0].directive}
                            </DirectiveMsg>
                        )}
                        <div className="mt-8">
                            <Button
                                type="submit"
                                size="md"
                                backgroundColor={
                                    !checkAllForm() ? theme.color.navy : ''
                                }
                                backgroundImage={
                                    checkAllForm() ? theme.color.gradient : ''
                                }
                                disabled={isDisabled}
                                onClick={
                                    level < 5
                                        ? handleNextButton
                                        : (
                                              e: React.SyntheticEvent<HTMLFormElement>
                                          ) => handleSignup(e)
                                }
                            >
                                <span
                                    className={
                                        isDisabled ? 'text-black' : 'text-white'
                                    }
                                >
                                    {level < 5 ? '다음' : '가입완료'}
                                </span>
                            </Button>
                        </div>
                    </form>
                </div>
            </section>
            {isModal && (
                <GlobalModal
                    size="small"
                    handleCancelClick={() => setIsModal(false)}
                >
                    <ModalContent
                        title={modalInfo.title}
                        description={modalInfo.description}
                        buttonText={modalInfo.buttonText}
                        handleButtonClick={() =>
                            modalInfo.signup
                                ? navigate('/home')
                                : setIsModal(false)
                        }
                    />
                </GlobalModal>
            )}
        </>
    );
};

export default SignupPage;
