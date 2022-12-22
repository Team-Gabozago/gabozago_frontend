import ReactDom from 'react-dom';
import tw from 'twin.macro';

import Overlayout from '@/components/OverLayout';

const selectSize = {
    small: tw`w-80 h-48`,
    medium: tw`w-80 h-[28.25rem]`,
    large: tw`w-[32rem] h-[40rem]`,
};

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
            <section
                id="modal-wrapper"
                className="flex flex-col items-center fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] rounded-lg z-[999] bg-white"
                css={selectSize[size]}
            >
                {children}
            </section>
        </>,
        document.getElementById('globalModal-root') as HTMLElement
    );

export default GlobalModal;
