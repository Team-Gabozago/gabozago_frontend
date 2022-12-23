import { Outlet } from 'react-router-dom';

import Footer from '@/components/common/Footer';

const AfterLoginLayout = () => (
    <>
        <section className="h-screen w-[23.4375rem] flex flex-col relative bg-navy no-scrollbar overflow-y-auto">
            <Outlet />
        </section>
        <Footer />
    </>
);

export default AfterLoginLayout;
