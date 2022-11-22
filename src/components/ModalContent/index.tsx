import * as S from './ModalContent.style';

interface ModalContentProps {
    title: string;
    description?: string;
    handleButtonClick: () => void;
    buttonText: string;
}

const ModalContents = ({
    title,
    description,
    buttonText,
    handleButtonClick,
}: ModalContentProps) => (
    <S.ModalWrapper>
        <S.ModalTitle>{title}</S.ModalTitle>
        {description && <S.ModalDescription>{description}</S.ModalDescription>}
        <S.ModalButton onClick={handleButtonClick}>{buttonText}</S.ModalButton>
    </S.ModalWrapper>
);

export default ModalContents;
