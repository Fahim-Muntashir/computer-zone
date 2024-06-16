import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Header/Navbar";
import MiniNav from "../components/Shared/Header/MiniNav";

const MainLayout = () => {
    return (
        <div>
            <MiniNav></MiniNav>
            <div className="sticky -top-2 transition-all duration-0 bg-white z-[100]">
                <Navbar></Navbar>
            </div>

            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;