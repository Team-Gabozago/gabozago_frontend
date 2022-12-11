import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const CreateFeedWrapper = styled.div`
    ${flexbox({ jc: 'center', ai: 'center' })};
    width: 4rem;
    height: 4rem;
    position: sticky;
    margin-left: auto;
    bottom: 5rem;
    border-radius: 50%;
    background-image: ${theme.color.gradient};
`;
