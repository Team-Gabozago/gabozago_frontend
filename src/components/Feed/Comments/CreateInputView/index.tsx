interface CreateInputViewProps {
    profile_image: string;
    content?: string;
    commentAuthor?: string;
    handleChangeComment?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddComment?: () => void;
    handleInputViewClick?: () => void;
}

const CreateInputView = ({
    profile_image,
    content,
    commentAuthor,
    handleChangeComment,
    handleAddComment,
    handleInputViewClick,
}: CreateInputViewProps) => (
    <div className="w-[20.4375rem] flex items-center gap-4 relative">
        <img
            className="w-8 h-8 rounded-full"
            src={profile_image}
            alt="프로필 이미지"
        />
        <input
            type="input"
            className="w-80 overflow-y-scroll p-3 border-b-[1px] border-solid border-gray text-xs"
            value={content}
            placeholder={
                commentAuthor
                    ? `@${commentAuthor}님에게 답글을 입력해 주세요`
                    : '댓글을 입력해주세요'
            }
            onChange={handleChangeComment}
            onClick={handleInputViewClick}
            autoFocus
        />
        <button
            type="button"
            className="absolute top-3 right-3 text-gray text-xs"
            onClick={handleAddComment}
        >
            등록
        </button>
    </div>
);

export default CreateInputView;
