import * as S from './style';

interface Props {
    className?: string;
    fontSize?: number;
    color?: string;
}

export const BackButton = (props: Props) => (
    <S.Icon className="ic-back-btn" {...props} />
);
export const Asterisk = (props: Props) => (
    <S.Icon className="ic-asterisk" {...props} />
);

export const ReplyComment = (props: Props) => (
    <S.Icon className="ic-comment" {...props} />
);

export const Create = (props: Props) => (
    <S.Icon className="ic-create" {...props} />
);

export const Edit = (props: Props) => <S.Icon className="ic-edit" {...props} />;

export const Profile = (props: Props) => (
    <S.Icon className="ic-profile" {...props} />
);

export const Search = (props: Props) => (
    <S.Icon className="ic-search" {...props} />
);

export const Cancel = (props: Props) => (
    <S.Icon className="ic-cancel" {...props} />
);

export const Conversation = (props: Props) => (
    <S.Icon className="ic-conversation" {...props} />
);

export const Setting = (props: Props) => (
    <S.Icon className="ic-setting" {...props} />
);

export const Heart = (props: Props) => (
    <S.Icon className="ic-heart" {...props} />
);

export const Minus = (props: Props) => (
    <S.Icon className="ic-minus" {...props} />
);

export const ArrowUp = (props: Props) => (
    <S.Icon className="ic-arrow-up" {...props} />
);

export const ArrowDown = (props: Props) => (
    <S.Icon className="ic-arrow-down" {...props} />
);

export const Check = (props: Props) => (
    <S.Icon className="ic-check" {...props} />
);

export const Toggle = (props: Props) => (
    <S.Icon className="ic-toggle" {...props} />
);

export const Home = (props: Props) => <S.Icon className="ic-home" {...props} />;
