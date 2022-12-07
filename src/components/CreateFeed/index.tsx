import { Link } from 'react-router-dom';

import * as S from './CreateFeed.style';

import I from '@/components/common/Icons';

const CreateFeed = () => (
    <Link to="/feed/form">
        <S.CreateFeedWrapper>
            <I.Create fontSize={1.8} />
        </S.CreateFeedWrapper>
    </Link>
)

export default CreateFeed;