import { Outlet } from "react-router-dom";
import logo from '../assets/log1.png'
import { useState } from "react";
import Header from "../components/Dashboard/Header/Header";
import SidebarLinkGroup from "../components/Dashboard/Sidebar/SidebarLinkGroup";

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    return (
        <div className="md:flex h-screen md:overflow-hidden">
            {/* Sidebar */}
            <div className={`bg-white border-r overflow-y-auto lg:w-64 overflow-x-hidden fixed top-0 left-0 bottom-0 z-50 flex flex-col transition-all duration-300 
                 ${isSidebarOpen ? 'w-64' : 'w-16'} ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:static md:h-auto md:translate-x-0 md:w-auto`}>
                <div className="flex items-center justify-center h-14 my-2">
                    <img src={logo} alt="" className="w-40" />
                </div>
                <SidebarLinkGroup></SidebarLinkGroup>
            </div>

            {/* Header and Content */}
            <div className="md:flex md:flex-col lg:mx-3 flex-grow w-full lg:w-4/5">
                {/* Navbar */}
                <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

                {/* Main Content */}
                <div className={`p-4 overflow-y-auto `}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;