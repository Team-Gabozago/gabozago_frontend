import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import FeedProfile from '../Profile';

import * as S from './CommentList.style';

import GlobalModal from '@/components/GlobalModal';
import ModalContent from '@/components/ModalContent';
import { Comment } from '@/interfaces/comment';
import { userState } from '@/recoil/atoms/user';

interface CommentListProps {
    comments: Comment[];
}

const CommentList = ({ comments }: CommentListProps) => {
    const user = useRecoilValue(userState);
    const [isModal, setIsModal] = useState(false);
    const [modalText, setModalText] = useState({
        title: '',
        description: '',
    });

    const handlePutComment = (id: number) => {
        setModalText({
            title: '서비스 준비중입니다.',
            description: '댓글 수정 기능 준비중',
        });
        setIsModal(true);
    };

    const handleDeleteComment = (id: number) => {
        setModalText({
            title: '서비스 준비중입니다.',
            description: '댓글 삭제 기능 준비중',
        });
        setIsModal(true);
    };

    return (
        <S.CommentList>
            {comments &&
                comments.map((comment: Comment) => (
                    <S.Comment key={`comment-${comment.id}`}>
                        <S.Header>
                            <FeedProfile
                                author={comment.author}
                                updatedAt={comment.updated_at}
                            />
                            {user.id === comment.author.id && (
                                <>
                                    <S.ButtonWrapper>
                                        <S.Button
                                            onClick={() =>
                                                handlePutComment(comment.id)
                                            }
                                        >
                                            수정
                                        </S.Button>
                                        <S.Button
                                            onClick={() =>
                                                handleDeleteComment(comment.id)
                                            }
                                        >
                                            삭제
                                        </S.Button>
                                    </S.ButtonWrapper>
                                    {isModal && (
                                        <GlobalModal
                                            size="small"
                                            handleCancelClick={() =>
                                                setIsModal(false)
                                            }
                                        >
                                            <ModalContent
                                                title={modalText.title}
                                                description={
                                                    modalText.description
                                                }
                                                buttonText="확인"
                                                handleButtonClick={() =>
                                                    setIsModal(false)
                                                }
                                            />
                                        </GlobalModal>
                                    )}
                                </>
                            )}
                        </S.Header>
                        <S.Content>{comment.content}</S.Content>
                    </S.Comment>
                ))}
        </S.CommentList>
    );
};

export default CommentList;
