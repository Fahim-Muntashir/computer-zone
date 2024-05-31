import { MdOutlineNotStarted } from 'react-icons/md';
import Container from '../Container';
import { IoLocationSharp } from 'react-icons/io5';
import { FaTruckFast } from 'react-icons/fa6';
import { CgProfile } from 'react-icons/cg';


const MiniNav = () => {

    const about = [

        {
            name: "Welcome to the Computer Zone",
            icon: <MdOutlineNotStarted />


        }
    ]
    const contactNav = [

        {
            name: "Store Location",
            icon: <IoLocationSharp />
        }, {
            name: "Free Dalivary & Returns",
            icon: <FaTruckFast />
        },
        {
            name: "My Account",
            icon: <CgProfile></CgProfile>
        }
    ]


    return (

        <Container>
            <div className='sm:hidden md:visible justify-between text-[#050505f4]  lg:flex'>
                <div className='flex gap-x-4 py-3 text-gray-900 '>

                    {
                        about.map((item) => (

                            <a href="" className=' border-gray-600 text-sm  flex items-center gap-x-3 '> <span className='text-lg'>
                                {
                                    item.icon
                                }
                            </span> <span> {
                                item.name
                            }</span>
                            </a>



                        ))
                    }

                </div>
                <div className="text-sm flex gap-x-5 text-gray-800">
                    {
                        contactNav.map((item) => (

                            <a href="" className=' border-gray-600 text-sm  flex items-center gap-x-3 '> <span className='text-lg'>
                                {
                                    item.icon
                                }
                            </span> <span> {
                                item.name
                            }</span>
                            </a>



                        ))
                    }
                </div>

            </div></Container>

    );
};

export default MiniNav;