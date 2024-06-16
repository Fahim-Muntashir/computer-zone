import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Container from '../Container';
import MiniNav from './MiniNav';
import logo from '../../../assets/log1.png'

const Navbar = () => {



    const [open, setOpen] = useState(false);

    return (
        <div className=''>
            <div className='text-black'>
                <Container>
                    <div className='relative'>
                        {/* make this sticky */}
                        <div className='flex top-0 justify-between items-center py-2'>
                            <img src={logo} alt="computer tech logo" className='w-44' />

                            <div className={`items-center justify-between hidden w-full  md:flex md:w-auto`} id="navbar-sticky">

                                <form class="max-w-lg mx-auto">
                                    <div class="flex">
                                        <div >
                                            <select id="maxPrice" className="border font-medium border-gray-300 rounded-s-full text-[#9fa2a2] text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer">
                                                <option value="" selected>MAX Price</option>
                                                <option value="10">10</option>
                                                <option value="100">100</option>
                                                <option value="1000">1000</option>
                                                <option value="10000">10000</option>
                                            </select>
                                        </div>
                                        <div class="relative w-full">
                                            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-full border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Mockups, Logos, Design Templates..." required />
                                            <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-full border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                </svg>
                                                <span class="sr-only">Search</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                            <div>
                                <button className='bg-[rgb(0,174,255)]  px-6 py-1 font-bold'>Login</button>
                                <button onClick={() => setOpen(true)} className={`${open ? "hidden" : ""} md:hidden px-3`} > <GiHamburgerMenu />
                                </button>
                                <button onClick={() => setOpen(false)} className={`${open ? "" : "hidden"} md:hidden px-3`}><IoMdClose />
                                </button>

                            </div>
                        </div>

                    </div>
                </Container>

                {/* Main Nav end */}
                <div className='flex bg-teal-400 justify-between items-center py-2'>

                    <div className={`items-center justify-between hidden w-full  md:flex md:w-auto sticky `} id="navbar-sticky">
                        <Container>

                            <ul className="flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                                <li>
                                    <a href="#" className="block py-2 px-3 " aria-current="page">Home</a>
                                </li>
                                <li>
                                    <Link to="/properties" className="block py-2 px-3  " >Properties</Link>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 ">Services</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3">Contact</a>
                                </li>
                            </ul></Container>
                    </div>

                </div>

            </div >
            <div className={`${open ? 'w-[80%] ms-0 transition-all  delay-150' : ''} bg-[#003461] px-3 py-10  text-white -ms-[500px] fixed h-screen flex flex-col z-10 justify-between`}>

                <ul className="flex flex-col">
                    <li>
                        <a href="#" className="block py-2 px-3 border-b my-1 border-b-gray-600" aria-current="page">Home</a>
                    </li>
                    <li>
                        <Link to="/properties" className="block py-2 px-3 border-b my-1 border-b-gray-600" >Properties</Link>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 border-b my-1 border-b-gray-600" >Services</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 border-b my-1 border-b-gray-600"  >Contact</a>
                    </li>
                </ul>

            </div >

        </div >
    );
};

export default Navbar;