import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';



const Header = (props: { isSidebarOpen: boolean, setIsSidebarOpen: (arg0: boolean) => void }) => {

    return (
        <div className=''>

            {/* Main Nav */}

            <div className='bg-[#ffffff] text-blacks'>

                <div className='flex justify-between items-center py-2'>

                    <div className={`items-center justify-between flex w-full  md:flex md:w-auto sticky `} id="navbar-sticky">
                        <ul className="flex  md:p-0 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">

                            <li>
                                <a href="#" className="block py-2 px-3 ">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3">Contact</a>
                            </li>
                        </ul>


                    </div>
                    <div className='flex justify-center items-center'>

                        <img src="https://media.licdn.com/dms/image/D5603AQElHSQiVv8oTA/profile-displayphoto-shrink_800_800/0/1701836775909?e=2147483647&v=beta&t=I2m2XDV8V13qqP08HWYxNf1OZk6Fqg6tst9o0Uy5l2U" className='w-10 h-10 rounded-full object-cover' alt="" />
                        <div>
                            <button onClick={() => props.setIsSidebarOpen(true)} className={`${props.isSidebarOpen ? "hidden" : ""} lg:hidden px-3 text-2xl transition-all delay-75`} > <GiHamburgerMenu />
                            </button>
                            <button onClick={() => props.setIsSidebarOpen(false)} className={`${props.isSidebarOpen ? "" : "hidden"} lg:hidden px-3 text-2xl`}><IoMdClose />
                            </button>
                        </div>

                    </div>
                </div>




            </div >


        </div >
    );
};

export default Header;