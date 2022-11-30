import * as S from './DirectiveMsg.style';

interface DirectiveMsgProps {
    active: boolean;
    children: React.ReactNode;
    css?: any;
}

const DirectiveMsg = ({ active, children, css }: DirectiveMsgProps) => (
    <S.DirectiveMsg active={active} css={css}>
        {children}
    </S.DirectiveMsg>
);

export default DirectiveMsg;
