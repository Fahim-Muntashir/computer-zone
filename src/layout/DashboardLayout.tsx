
import { Button } from '@material-tailwind/react';
import logo from '../assets/log.png'
import { ComplexNavbar } from '../components/DashBoardNav';
const DashboardLayout = () => {
    return (
        <div className="grid grid-cols-12 h-screen">
            <div className="col-span-2 bg-indigo-900 h-full">

                <div>
                    <img src={logo} className='w-[80%] mx-auto' alt="" />

                    <Button>Button</Button>
                </div>

            </div>
            <div className="col-span-10 w-full h-full">

                <ComplexNavbar></ComplexNavbar>
            </div>
        </div>

    );
};

export default DashboardLayout;