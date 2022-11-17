import * as S from './style';

interface Props {
    fontSize?: number;
    color?: string;
}

export const BackButton = (props: Props) => <S.Icon className="ic-back-btn" {...props} />
