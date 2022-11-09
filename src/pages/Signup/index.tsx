import React, { useEffect, useState } from 'react';

import * as S from './Signup.stlye'

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { useInput } from '@/hooks/useInput';
import theme from '@/styles/theme';

const checkName = (name: string) => {
    const regex = /^[가-힣a-zA-Z]+$/
    return regex.test(name);
}

const checkNickname = (nickname: string) => {
    const regex = /^[가-힣|a-z|A-Z|0-9|]{1,6}$/;

    return regex.test(nickname);
}

const checkEmail = (email: string) => {
    const regex = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return regex.test(email);
}

const checkPassword = (password: string) => {
    const regex = /^[a-zA-Z0-9]{6,}$/;
    return regex.test(password);
}

const SignupPage = () => {
    const [level, setLevel] = useState(0);
    const [isDisabled, setIsDisabled] = useState(true);

    const { value: name, setValue: setName, onChange: handleChangeName } = useInput('');
    const { value: nickname, setValue: setNickname, onChange: handleChangeNickname } = useInput('');
    const { value: email, setValue: setEmail, onChange: handleChangeEmail } = useInput('');
    const { value: password, setValue: setPassword, onChange: handleChangePassword } = useInput('');

    const handleNextButton = () => {
        // level 하나 증가시키고 Button은 다시 disabled
        setLevel(level + 1);
        setIsDisabled(true);
    }

    useEffect(() => checkName(name) ? setIsDisabled(false) : setIsDisabled(true), [name]);

    useEffect(() => checkNickname(nickname) ? setIsDisabled(false) : setIsDisabled(true), [nickname]);

    useEffect(() => checkEmail(email) ? setIsDisabled(false) : setIsDisabled(true), [email]);

    useEffect(() => checkPassword(password) ? setIsDisabled(false) : setIsDisabled(true), [password]);

    return (
        <S.SignupWrapper>
            <S.Title>이름을 알려주세요.</S.Title>
            {level >= 3 && <Input name="패스워드" type="password" placeholder="패스워드를 입력해주세요" value={password} tabIndex="-3" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangePassword(e)} />}
            {level >= 2 && <Input name="이메일" type="email" placeholder="이메일을 입력해주세요" value={email} tabIndex="-2" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeEmail(e)} />}
            {level >= 1 && <Input name="별명" type="text" placeholder="공백 포함 6자 이내의 한글, 영문, 숫자로 입력해주세요" value={nickname} tabIndex="-1" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeNickname(e)} />}
            <Input name="이름" type="text" placeholder="한글, 영문만 입력해주세요." value={name} tabIndex="0" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeName(e)} />
            <S.ButtonWrapper>
                <Button as="button" size="md" backgroundColor={theme.color.lime} disabled={isDisabled} onClick={handleNextButton}>다음</Button>
            </S.ButtonWrapper>
        </S.SignupWrapper>
    )
}

export default SignupPage;