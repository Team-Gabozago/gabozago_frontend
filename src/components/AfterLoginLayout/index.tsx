import { Outlet } from 'react-router-dom';

import Footer from '@/components/common/Footer';

const AfterLoginLayout = () => (
    <>
        <section className="h-screen w-96 flex flex-col px-7 relative bg-navy overflow-y-auto">
            <Outlet />
        </section>
        <Footer />
    </>
);

export default AfterLoginLayout;
