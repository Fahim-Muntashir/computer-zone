// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div className="md:flex gap-x-3 my-4 md:h-[60vh]">
            <div className='md:w-3/5 md:h-full'>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper h-full bf"
                >
                    <SwiperSlide>
                        <div className='h-full bg-gray-100'>  <section className=" dark:bg-gray-900">
                            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                                <div className="mr-auto place-self-center lg:col-span-7">
                                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
                                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>

                                    <button className='bg-[rgb(0,174,255)]  px-6 py-1 font-bold'>Login</button>

                                </div>
                                <div className="lg:mt-0 lg:col-span-5 lg:flex">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
                                </div>


                            </div>
                        </section>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-full bg-gray-100'>  <section className=" dark:bg-gray-900">
                            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                                <div className="mr-auto place-self-center lg:col-span-7">
                                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
                                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>

                                    <button className='bg-[rgb(0,174,255)]  px-6 py-1 font-bold'>Login</button>

                                </div>
                                <div className="lg:mt-0 lg:col-span-5 lg:flex">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
                                </div>


                            </div>
                        </section>
                        </div>


                    </SwiperSlide>
                    <SwiperSlide>

                        <div className='h-full bg-gray-100'>  <section className=" dark:bg-gray-900">
                            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                                <div className="mr-auto place-self-center lg:col-span-7">
                                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
                                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>

                                    <button className='bg-[rgb(0,174,255)]  px-6 py-1 font-bold'>Login</button>

                                </div>
                                <div className="lg:mt-0 lg:col-span-5 lg:flex">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
                                </div>


                            </div>
                        </section>
                        </div>


                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="flex md:w-2/5 flex-col gap-y-1 md:h-full">

                <div className="flex md:h-2/4 bg-gray-300 justify-between items-center p-4">
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">Game Console</h1>
                        <p className="text-base lg:text-xl text-gray-800">Save Upto <span className="font-bold">30%</span></p>
                    </div>     <div className="flex justify-end  md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                        <img src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png" alt="" className="md:w-20 md:h-20 lg:w-44 lg:h-full" />
                    </div>


                </div>
                <div className="flex md:h-2/4 bg-gray-300 justify-between items-center p-4">
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">Game Console</h1>
                        <p className="text-base lg:text-xl text-gray-800">Save Upto <span className="font-bold">30%</span></p>
                    </div>     <div className="flex justify-end  md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                        <img src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png" alt="" className="md:w-20 md:h-20 lg:w-44 lg:h-full" />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Banner;