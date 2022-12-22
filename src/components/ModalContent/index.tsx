interface ModalContentProps {
    title: string;
    description?: string;
    handleButtonClick: () => void;
    buttonText: string;
}

const ModalContent = ({
    title,
    description,
    buttonText,
    handleButtonClick,
}: ModalContentProps) => (
    <div className="h-48 pt-[2.25rem] px-7 pb-6 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3">
            <h1 className="text-md font-weight">{title}</h1>
            {description && <span className='text-xs text-label'>{description}</span>}
        </div>
        <button type="button" className="w-64 h-12 rounded-lg bg-blue text-white" onClick={handleButtonClick}>{buttonText}</button>
    </div>
);

export default ModalContent;
