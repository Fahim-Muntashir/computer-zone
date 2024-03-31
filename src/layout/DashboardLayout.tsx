
import { Outlet } from 'react-router-dom';
import { ComplexNavbar } from '../components/DashBoardNav';
import { Sidebar } from '../components/Dashboard/Sidebar';
const DashboardLayout = () => {
    return (
        <div className="grid grid-cols-12 h-screen">
            <div className="hidden lg:block lg:col-span-3 relative h-full">

                <div className='fixed lg:z-10 lg:block '>
                    <Sidebar></Sidebar>
                </div>

            </div>
            <div className="col-span-12 md:col-span-12  lg:col-span-9 h-full relative">

                <div className='sticky top-0 z-10'>
                    <ComplexNavbar></ComplexNavbar>
                </div>
                <div className=''>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>

    );
};

export default DashboardLayout;