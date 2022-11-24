import { MutableRefObject } from 'react';

import * as S from './edit.style';

interface Props {
    readOnly?: boolean;
    ninkName?: string;
    onClick?: () => void;
    // eslint-disable-next-line react/no-unused-prop-types
    ref?: MutableRefObject<null>;
}

const Edit = ({ readOnly, ninkName, onClick }: Props) => {
    const asdf = 1;
    return (
        <S.Container>
            <S.Profile>프로필</S.Profile>
            <S.InputContainer>
                <S.Input
                    type="text"
                    placeholder={
                        ninkName
                            ? `${ninkName}님에게 답글을 입력해주세요`
                            : '댓글을 입력해주세요'
                    }
                    readOnly={!!readOnly}
                />
                <S.Button type="button">등록</S.Button>
            </S.InputContainer>
        </S.Container>
    );
};

export default Edit;
