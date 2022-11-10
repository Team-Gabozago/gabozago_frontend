import React, { useEffect, useState } from 'react';

import * as S from './Signup.stlye'

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { useInput } from '@/hooks/useInput';
import theme from '@/styles/theme';

const formData = [
    { id: 0, title: '이름을 알려주세요.', directive: '한글, 영문만 입력해주세요' },
    { id: 1, title: '별명은 뭐로 할까요?', directive: '공백 포함  6자 이내의 한글, 영문, 숫자로 입력해주세요' },
    { id: 2, title: '이메일을 알려주세요.', directive: '올바른 이메일 형식만 입력해주세요' },
    { id: 3, title: '비밀번호는 뭘로 할까요?', directive: '대소문자, 숫자 포함 6자리 이상 입력해주세요' },
    { id: 4, title: '한 번 더 입력해주세요.', directive: '비밀번호가 처음 입력한 것과 달라요' },
    { id: 5, title: '전화번호를 알려주세요.', directive: '띄어쓰기나 기호 없이 숫자만 입력해주세요' },
]

const checkName = (name: string) => {
    const regex = /^[가-힣a-zA-Z]+$/
    return regex.test(name);
}

const checkNickname = (nickname: string) => {
    const regex = /^[가-힣|a-z|A-Z|0-9|]{1,6}$/;

    return regex.test(nickname);
}

const checkEmail = (email: string) => {
    const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return regex.test(email);
}

const checkPassword = (password: string) => {
    const regex = /^[a-zA-Z0-9]{6,}$/;
    return regex.test(password);
}

const checkPassword2 = (password: string, password2: string) => password === password2;

const checkTel = (tel: string) => {
    const regex = /^01([0|1|6|7|8|9])[0-9]{8}$/g;
    return regex.test(tel);
}

const SignupPage = () => {
    const [level, setLevel] = useState(0);
    const [isDisabled, setIsDisabled] = useState(true);

    const { value: name, setValue: setName, onChange: handleChangeName } = useInput('');
    const { value: nickname, setValue: setNickname, onChange: handleChangeNickname } = useInput('');
    const { value: email, setValue: setEmail, onChange: handleChangeEmail } = useInput('');
    const { value: password, setValue: setPassword, onChange: handleChangePassword } = useInput('');
    const { value: password2, setValue: setPassword2, onChange: handleChangePassword2 } = useInput('');
    const { value: tel, setValue: setTel, onChange: handleChangeTel } = useInput('');

    const handleNextButton = () => {
        // level 하나 증가시키고 Button은 다시 disabled
        setLevel(level + 1);
        setIsDisabled(true);
    }

    const handleOnKeyUp = (e: React.KeyboardEvent) => {
        if (e.code === 'Enter' && !isDisabled) {
            handleNextButton();
        }
    }

    useEffect(() => checkName(name) ? setIsDisabled(false) : setIsDisabled(true), [name]);

    useEffect(() => checkNickname(nickname) ? setIsDisabled(false) : setIsDisabled(true), [nickname]);

    useEffect(() => checkEmail(email) ? setIsDisabled(false) : setIsDisabled(true), [email]);

    useEffect(() => checkPassword(password) ? setIsDisabled(false) : setIsDisabled(true), [password]);

    useEffect(() => checkPassword2(password, password2) ? setIsDisabled(false) : setIsDisabled(true), [password2]);

    useEffect(() => checkTel(tel) ? setIsDisabled(false) : setIsDisabled(true), [tel]);

    return (
        <S.SignupWrapper>
            <S.SignupForm>
                <S.Title>{formData[level].title}</S.Title>
                {level >= 5 &&
                    <>
                        <Input name="전화번호" type="tel" placeholder="띄어쓰기나 기호 없이 숫자만 입력해주세요. Ex) 01025486707" value={tel} tabIndex="-5" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeTel(e)} onKeyUp={(e: React.KeyboardEvent) => handleOnKeyUp(e)} />
                        {tel.length > 0 && <S.DirectiveMsg active={checkTel(tel)}>{formData[level].directive}</S.DirectiveMsg>}
                    </>}
                {level >= 4 &&
                    <>
                        <Input name="비밀번호 확인" type="password" placeholder="비밀번호를 한 번 더 입력해주세요" value={password2} tabIndex="-4" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangePassword2(e)} onKeyUp={(e: React.KeyboardEvent) => handleOnKeyUp(e)} />
                        {password2.length > 0 && <S.DirectiveMsg active={checkPassword2(password, password2)}>{formData[level].directive}</S.DirectiveMsg>}
                    </>
                }
                {level >= 3 &&
                    <>
                        <Input name="비밀번호" type="password" placeholder="비밀번호를 입력해주세요" value={password} tabIndex="-3" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangePassword(e)} onKeyUp={(e: React.KeyboardEvent) => handleOnKeyUp(e)} />
                        {password.length > 0 && <S.DirectiveMsg active={checkPassword(password)}>{formData[level].directive}</S.DirectiveMsg>}
                    </>
                }
                {level >= 2 &&
                    <>
                        <Input name="이메일" type="email" placeholder="이메일을 입력해주세요" value={email} tabIndex="-2" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeEmail(e)} onKeyUp={(e: React.KeyboardEvent) => handleOnKeyUp(e)} />
                        {email.length > 0 && <S.DirectiveMsg active={checkEmail(email)}>{formData[level].directive}</S.DirectiveMsg>}
                    </>}
                {level >= 1 &&
                    <>
                        <Input name="별명" type="text" placeholder="공백 포함 6자 이내의 한글, 영문, 숫자로 입력해주세요" value={nickname} tabIndex="-1" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeNickname(e)} onKeyUp={(e: React.KeyboardEvent) => handleOnKeyUp(e)} />
                        {nickname.length > 0 && <S.DirectiveMsg active={checkNickname(nickname)}>{formData[level].directive}</S.DirectiveMsg>}
                    </>
                }
                <>
                    <Input name="이름" type="text" placeholder="한글, 영문만 입력해주세요." value={name} tabIndex="0" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeName(e)} onKeyUp={(e: React.KeyboardEvent) => handleOnKeyUp(e)} />
                    {name.length > 0 && <S.DirectiveMsg active={checkName(name)}>{formData[level].directive}</S.DirectiveMsg>}
                </>
                <S.ButtonWrapper>
                    <Button type="submit" size="md" backgroundColor={theme.color.lime} disabled={isDisabled} onClick={handleNextButton}>다음</Button>
                </S.ButtonWrapper>
            </S.SignupForm>
        </S.SignupWrapper>
    )
}

export default SignupPage;