import ReactDom from 'react-dom';

import * as S from './GlobalModal.style';

interface GlobalModalProps {
    size: 'small' | 'medium' | 'large';
    handleCancelClick: () => void;
    children: React.ReactNode;
}

const GlobalModal = ({
    size = 'small',
    handleCancelClick,
    children,
}: GlobalModalProps) =>
    ReactDom.createPortal(
        <>
            <S.Overlay onClick={handleCancelClick} />
            <S.GlobalModal size={size} id="modal-wrapper">
                {children}
            </S.GlobalModal>
        </>,
        document.getElementById('globalModal-root') as HTMLElement
    );

export default GlobalModal;
