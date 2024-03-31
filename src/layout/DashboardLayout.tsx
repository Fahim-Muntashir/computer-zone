
import { Outlet } from 'react-router-dom';
import logo from '../assets/log.png'
import { ComplexNavbar } from '../components/DashBoardNav';
const DashboardLayout = () => {
    return (
        <div className="grid grid-cols-12 h-screen">
            <div className="col-span-2 bg-indigo-900 h-full">

                <div>
                    <img src={logo} className='w-[80%] mx-auto' alt="" />

                </div>

            </div>
            <div className="col-span-10 w-full h-full">

                <div>
                    <ComplexNavbar></ComplexNavbar>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>

    );
};

export default DashboardLayout;