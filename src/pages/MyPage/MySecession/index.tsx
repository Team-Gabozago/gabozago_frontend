import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import * as S from './MySecession.style';

import { secessionUser } from '@/apis/user';
import Button from '@/components/common/Button';
import DirectiveMsg from '@/components/common/DirectiveMsg';
import Input from '@/components/common/Input';
import GlobalModal from '@/components/GlobalModal';
import ModalContent from '@/components/ModalContent';
import Header from '@/components/MyPage/Header';
import { useInput } from '@/hooks/useInput';
import { userState } from '@/recoil/atoms/user';
import theme from '@/styles/theme';
import { checkNickname } from '@/utils/regex';

const MySecessionPage = () => {
    const navigate = useNavigate();

    const user = useRecoilValue(userState);

    const [isDisabled, setIsDisabled] = useState(true);
    const [isCheck, setIsCheck] = useState(false);
    const [isNext, setisNext] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const [isSecessionModal, setIsSecessionModal] = useState(false);

    const {
        value: nickname,
        setValue: setNickname,
        onChange: handleChangeNickname,
    } = useInput('', (targetValue: string) => {
        setNickname(targetValue);
    });

    const fetchSecessionUser = useMutation(secessionUser, {
        onSuccess: (data: { member_id: number }) => {
            if (data.member_id) {
                // 성공 popup 띄우기.
                setIsSecessionModal(true);
            }
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const handleNextButton = () => {
        setisNext(true);
        setIsCheck(false);
        setIsDisabled(true);
    };

    const handleCheckButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsCheck(!isCheck);
        setIsDisabled(!isDisabled);
    };

    const handleSecession = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    useEffect(() => {
        if (nickname === user.nickname) {
            setIsDisabled(false);
            setIsCheck(true);
        } else {
            setIsDisabled(true);
            setIsCheck(false);
        }
    }, [nickname, user]);

    return (
        <>
            <S.MySecessionPage>
                <Header title="탈퇴하기" />
                <S.SecessionForm>
                    {isNext ? (
                        <>
                            <S.TitleWrapper>
                                <S.Title>다시 만나는 날을</S.Title>
                                <S.Title>기다리고 있을게요!</S.Title>
                            </S.TitleWrapper>
                            <Input
                                width={20.375}
                                name="별명"
                                type="text"
                                placeholder="원투를 떠나시려면, 별명을 입력해주세요"
                                value={nickname}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => handleChangeNickname(e)}
                                success={
                                    nickname.length > 0 &&
                                    checkNickname(nickname)
                                }
                                error={
                                    nickname.length > 0 &&
                                    !checkNickname(nickname)
                                }
                            />
                            {nickname.length > 0 &&
                                !checkNickname(nickname) && (
                                    <DirectiveMsg
                                        active={checkNickname(nickname)}
                                    >
                                        사용 중인 별명을 입력해 주세요
                                    </DirectiveMsg>
                                )}
                        </>
                    ) : (
                        <>
                            <S.TitleWrapper>
                                <S.Title>달팽이 님</S.Title>
                                <S.Title>정말 떠나실 건가요?</S.Title>
                            </S.TitleWrapper>
                            <S.SubTitle>
                                원투를 떠나시면 이런 것들이 사라져요!
                            </S.SubTitle>
                            <S.Content>
                                <S.DesUl>
                                    <S.DesLi>
                                        언제 어디서든 가까운 운동 친구를 구할 수
                                        있던 <strong>원투</strong>
                                    </S.DesLi>
                                    <S.DesLi>
                                        새로운 운동, 새로운 친구를 발견하게
                                        해주던 <strong>우리동네 홈</strong>
                                    </S.DesLi>
                                    <S.DesLi>
                                        내가 하고 싶은 운동의 제안만 골라주던{' '}
                                        <strong>관심운동 홈</strong>
                                    </S.DesLi>
                                    <S.DesLi>
                                        함께 하고 싶은 친구들의 글을 모아둔{' '}
                                        <strong>관심 보낸 글</strong>
                                    </S.DesLi>
                                    <S.DesLi>
                                        친구들과 도란도란 나눈 추억{' '}
                                        <strong>
                                            내가 쓴 게시글, 댓글/답글
                                        </strong>
                                    </S.DesLi>
                                </S.DesUl>
                            </S.Content>
                            <S.CheckWrapper>
                                <S.CheckButton
                                    onClick={(
                                        e: React.MouseEvent<HTMLButtonElement>
                                    ) => handleCheckButton(e)}
                                    isCheck={isCheck}
                                />
                                <S.CheckText>
                                    모두 확인했어요. 탈퇴를 진행할래요.
                                </S.CheckText>
                            </S.CheckWrapper>
                        </>
                    )}
                    <S.ButtonWrapper>
                        <Button
                            type="submit"
                            size="md"
                            disabled={isDisabled}
                            backgroundColor={
                                isCheck ? theme.color.navy : theme.color.white
                            }
                            onClick={
                                isComplete
                                    ? (
                                          e: React.SyntheticEvent<HTMLFormElement>
                                      ) => handleSecession(e)
                                    : handleNextButton
                            }
                        >
                            <S.ButtonText isCheck={isCheck}>
                                {isNext ? '탈퇴하기' : '다음'}
                            </S.ButtonText>
                        </Button>
                    </S.ButtonWrapper>
                </S.SecessionForm>
            </S.MySecessionPage>
            {isSecessionModal && (
                <GlobalModal
                    size="small"
                    handleCancelClick={() => setIsSecessionModal(false)}
                >
                    <ModalContent
                        title="안녕히 가세요, 또 만나요!"
                        description="계정 탈퇴가 완료되었어요."
                        buttonText="완료"
                        handleButtonClick={() => navigate('/home')}
                    />
                </GlobalModal>
            )}
        </>
    );
};

export default MySecessionPage;
