import { Link } from 'react-router-dom';

import I from '@/components/common/Icons';

const CreateFeed = () => (
    <div className="w-16 h-16 flex justify-center items-center fixed ml-[16.25rem] bottom-20 rounded-full bg-gradient">
        <Link to="/feed/form">
            <I.Create fontSize={1.8} />
        </Link>
    </div>
);

export default CreateFeed;
