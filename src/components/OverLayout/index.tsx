interface OverlayoutProps {
    handleCancelClick: () => void;
}

const Overlayout = ({ handleCancelClick }: OverlayoutProps) => (
    <div aria-hidden="true" className="fixed top-0 right-0 bottom-0 left-0 z-[999] bg-black opacity-60" onClick={handleCancelClick} />
)

export default Overlayout;