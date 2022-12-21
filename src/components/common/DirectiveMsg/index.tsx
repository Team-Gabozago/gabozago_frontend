interface DirectiveMsgProps {
    active: boolean;
    children: React.ReactNode;
}

const DirectiveMsg = ({ active, children }: DirectiveMsgProps) => (
    <span
        className={`w-[18.5rem] mt-[-5px] text-xs ${
            active ? 'text-gray' : 'text-errorText'
        }`}
    >
        {children}
    </span>
);

export default DirectiveMsg;
