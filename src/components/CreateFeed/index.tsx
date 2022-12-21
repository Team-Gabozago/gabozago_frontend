import { Link } from 'react-router-dom';

import I from '@/components/common/Icons';

const CreateFeed = () => (
    <Link to="/feed/form">
        <div className="w-16 h-16 flex justify-center items-center ml-auto sticky bottom-20 rounded-full bg-gradient">
            <I.Create fontSize={1.8} />
        </div>
    </Link>
);

export default CreateFeed;
