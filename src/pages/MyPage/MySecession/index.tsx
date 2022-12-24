import styled from '@emotion/styled';
import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { secessionUser } from '@/apis/user';
import Button from '@/components/common/Button';
import DirectiveMsg from '@/components/common/DirectiveMsg';
import I from '@/components/common/Icons';
import Input from '@/components/common/Input';
import GlobalModal from '@/components/GlobalModal';
import ModalContent from '@/components/ModalContent';
import Header from '@/components/MyPage/Header';
import { PROFILE_DELETED } from '@/constants/code';
import { signupFormData } from '@/constants/form';
import { useInput } from '@/hooks/useInput';
import { userState } from '@/recoil/atoms/user';
import theme from '@/styles/theme';
import { checkNickname } from '@/utils/regex';

const Title = styled.h1`
    font-size: ${theme.fontSize.title};
    color: ${theme.color.navy};
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

const DesLi = styled.li`
    font-size: ${theme.fontSize.xs};

    strong {
        font-weight: bold;
    }
    ::before {
        content: '• ';
        color: ${theme.color.gray};
    }
`;

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
        onSuccess: (code: string) => {
            if (code === PROFILE_DELETED) {
                localStorage.removeItem('accessToken');
                setIsSecessionModal(true);
            }
        },
        onError: (error: unknown) => {
            throw new Error(`error is ${error}`);
        },
    });

    const handleNextButton = () => {
        setisNext(true);
        setIsComplete(true);
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
        fetchSecessionUser.mutate();
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
            <section>
                <Header title="탈퇴하기" />
                <form className="flex flex-col gap-4 px-6">
                    {isNext ? (
                        <>
                            <div className="mt-[3.75rem] mb-[2.5rem]">
                                <Title>다시 만나는 날을</Title>
                                <Title>기다리고 있을게요!</Title>
                            </div>
                            <Input
                                width={20.375}
                                name="별명"
                                type="text"
                                placeholder="원투를 떠나시려면, 별명을 입력해주세요"
                                value={nickname}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => handleChangeNickname(e)}
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
                                        {signupFormData[1].directive}
                                    </DirectiveMsg>
                                )}
                        </>
                    ) : (
                        <>
                            <div className="mt-14">
                                <Title>달팽이 님</Title>
                                <Title>정말 떠나실 건가요?</Title>
                            </div>
                            <p className="mt-14">
                                원투를 떠나시면 이런 것들이 사라져요!
                            </p>
                            <div className="p-6 rounded bg-silver">
                                <ul className="flex flex-col gap-3">
                                    <DesLi>
                                        언제 어디서든 가까운 운동 친구를 구할 수
                                        있던 <strong>원투</strong>
                                    </DesLi>
                                    <DesLi>
                                        새로운 운동, 새로운 친구를 발견하게
                                        해주던 <strong>우리동네 홈</strong>
                                    </DesLi>
                                    <DesLi>
                                        내가 하고 싶은 운동의 제안만 골라주던{' '}
                                        <strong>관심운동 홈</strong>
                                    </DesLi>
                                    <DesLi>
                                        함께 하고 싶은 친구들의 글을 모아둔{' '}
                                        <strong>관심 보낸 글</strong>
                                    </DesLi>
                                    <DesLi>
                                        친구들과 도란도란 나눈 추억{' '}
                                        <strong>
                                            내가 쓴 게시글, 댓글/답글
                                        </strong>
                                    </DesLi>
                                </ul>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-label">
                                <button
                                    type="button"
                                    className={`w-4 h-4 rounded-full flex justify-center items-center ${
                                        isCheck ? 'bg-navy' : 'bg-white'
                                    }`}
                                    onClick={(
                                        e: React.MouseEvent<HTMLButtonElement>
                                    ) => handleCheckButton(e)}
                                >
                                    <I.Check
                                        fontSize={0.4}
                                        color={
                                            isCheck
                                                ? theme.color.white
                                                : theme.color.gray
                                        }
                                    />
                                </button>
                                <span>모두 확인했어요. 탈퇴를 진행할래요.</span>
                            </div>
                        </>
                    )}
                    <div className="absolute bottom-20">
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
                            <span
                                className={`${
                                    isCheck ? 'text-white' : 'text-black'
                                }`}
                            >
                                {isNext ? '탈퇴하기' : '다음'}
                            </span>
                        </Button>
                    </div>
                </form>
            </section>
            {isSecessionModal && (
                <GlobalModal
                    size="small"
                    handleCancelClick={() => setIsSecessionModal(false)}
                >
                    <ModalContent
                        title="안녕히 가세요, 또 만나요!"
                        description="계정 탈퇴가 완료되었어요."
                        buttonText="완료"
                        handleButtonClick={() => {
                            navigate('/home');
                            return true;
                        }}
                    />
                </GlobalModal>
            )}
        </>
    );
};

export default MySecessionPage;
