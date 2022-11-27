import { useEffect, useState } from 'react';

import * as S from './Password.style';

import Button from '@/components/common/Button';
import DirectiveMsg from '@/components/common/DirectiveMsg';
import Input from '@/components/common/Input';
import Header from '@/components/MyPage/Header';
import { useInput } from '@/hooks/useInput';
import theme from '@/styles/theme';
import { checkPassword, checkPassword2 } from '@/utils/regex';

const PasswordPage = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [isNext, setisNext] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const {
        value: currentPassword,
        setValue: setCurrentPassword,
        onChange: handleChangeCurrentPassword,
        onClear: handleCurrentPasswordClear,
    } = useInput('', (targetValue: string) => {
        setCurrentPassword(targetValue);
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


    const handleNextButton = () => {
        setIsDisabled(true);
        setisNext(true);
    }

    const handlePassword = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
    }


    useEffect(() => {
        if (checkPassword(currentPassword)) setIsDisabled(false);
        else setIsDisabled(true);
    }, [currentPassword])

    useEffect(() => {
        if (newPassword === '' || newPassword2 === '') return;
        if (checkPassword2(newPassword, newPassword2)) setIsDisabled(false);
        else setIsDisabled(true);
    }, [newPassword, newPassword2])

    return (
        <S.PasswordPage>
            <Header title="비밀번호 변경" />
            <S.PasswordForm>
                <>
                    {isNext ?
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
                            />
                        </>
                        :
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
                    }
                    {currentPassword.length > 0 &&
                        !checkPassword(currentPassword) && (
                            <DirectiveMsg
                                active={checkPassword(currentPassword)}
                            >
                                <span>현재 사용중인 비밀번호를 입력해주세요</span>
                            </DirectiveMsg>
                        )}
                    <S.ButtonWrapper>
                        <Button
                            type="submit"
                            size="md"
                            backgroundImage={!isDisabled ? theme.color.gradient : ''}
                            disabled={isDisabled}
                            onClick={isComplete ? (e: React.SyntheticEvent<HTMLFormElement>) => handlePassword(e) : handleNextButton}
                        >
                            {isNext ? "완료" : "다음"}
                        </Button>
                    </S.ButtonWrapper>
                </>
            </S.PasswordForm>
        </S.PasswordPage >
    )
}

export default PasswordPage;