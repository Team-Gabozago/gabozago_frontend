import * as S from './Overlayout.style';

interface OverlayoutProps {
    handleCancelClick: () => void;
}

const Overlayout = ({ handleCancelClick }: OverlayoutProps) => (
    <S.Overlayout onClick={handleCancelClick} />
)

export default Overlayout;