import ReactDom from 'react-dom';

import * as S from './GlobalModal.style';

import Overlayout from '@/components/OverLayout'

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
            <Overlayout handleCancelClick={handleCancelClick} />
            <S.GlobalModal size={size} id="modal-wrapper">
                {children}
            </S.GlobalModal>
        </>,
        document.getElementById('globalModal-root') as HTMLElement
    );

export default GlobalModal;
