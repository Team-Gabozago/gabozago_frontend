import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { getFeed } from '@/apis/feeds';
import Header from '@/components/MyPage/Header';

const FeedPage = () => {
    const { id } = useParams();
    // useQuery.
    const { data: feed } = useQuery(['feed'], () => {
        if (id) getFeed(+id);
    });

    return (<Header title="새 글 작성" />)
}

export default FeedPage;