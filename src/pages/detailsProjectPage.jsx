import { motion } from 'motion/react';
import CarouselComponent from '../components/Carousel';
import { NavLink } from 'react-router-dom';

export default function DetailsProjectPage() {
    return (
        <>
            <div className='w-full h-[85vh] flex flex-col gap-6 md:gap-10 justify-center items-center bg-hero dark:bg-heroDark bg-cover bg-fixed'>
                <motion.div
                    initial={{ opacity: 0, translateX: -100 }}
                    whileInView={{
                        opacity: 1,
                        translateX: 0,
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className='font-bold text-2xl md:text-3xl lg:text-5xl tracking-wide dark:text-white'>
                        CROWN TEMPLATE
                    </h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateX: -100 }}
                    whileInView={{
                        opacity: 1,
                        translateX: 0,
                    }}
                    transition={{ duration: 1 }}
                    className='p-1 lg:w-[50%] text-center'
                >
                    <p className='text-sm md:text-base lg:text-2xl dark:text-white'>
                        This page contains the case study of Crown Website
                        Template which includes the Project Overview, Tools Used
                        and Live Links to the official product.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateX: -100 }}
                    whileInView={{
                        opacity: 1,
                        translateX: 0,
                    }}
                    transition={{ duration: 1 }}
                    className='bg-violet-500 w-40 h-12 hover:bg-violet-500/80 lg:text-xl font-bold rounded-lg text-white'
                >
                    <NavLink
                        to='/'
                        className='w-full h-full flex items-center justify-center'
                    >
                        LIVE LINK
                    </NavLink>
                </motion.div>
            </div>
            <div className='w-full h-full px-2 py-10 lg:p-7 flex flex-col justify-center items-center dark:text-white dark:bg-[#121212]'>
                <div className='w-[90%] lg:w-[55%] space-y-20'>
                    <CarouselComponent />
                    <div className='space-y-6'>
                        <motion.div
                            initial={{ opacity: 0, translateX: -100 }}
                            whileInView={{
                                opacity: 1,
                                translateX: 0,
                            }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className='font-bold text-lg lg:text-xl tracking-wider'>
                                PROJECT OVERVIEW
                            </h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, translateX: 100 }}
                            whileInView={{
                                opacity: 1,
                                translateX: 0,
                            }}
                            transition={{ duration: 1 }}
                        >
                            <p className='text-sm lg:text-base'>
                                Crown is a web template that I created targeting
                                the restaurant and food industry for people to
                                use for their own restaurant business and build
                                trust and engagement with their customers by
                                providing them with a better User Interface on
                                the Web. By taking User Interface ideas by
                                visiting different types of websites of the same
                                industry and even visited platforms like dribble
                                to get inspiration for building a good User
                                Interface that will bring great results. Feel
                                free to check out the Project by visiting the
                                Live Link.
                            </p>
                        </motion.div>
                    </div>
                    <div className='space-y-6'>
                        <motion.div
                            initial={{ opacity: 0, translateX: -100 }}
                            whileInView={{
                                opacity: 1,
                                translateX: 0,
                            }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className='font-bold text-lg lg:text-xl tracking-wider'>
                                TOOLS USED
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, translateX: 100 }}
                            whileInView={{
                                opacity: 1,
                                translateX: 0,
                            }}
                            transition={{ duration: 1 }}
                            className='flex gap-4 flex-wrap'
                        >
                            <div className='px-4 py-2 lg:p-4 flex justify-center items-center bg-[rgb(235,235,235)] dark:bg-black rounded-md'>
                                HTML
                            </div>
                            <div className='px-4 py-2 lg:p-4 flex justify-center items-center bg-[rgb(235,235,235)] dark:bg-black rounded-md'>
                                HTML
                            </div>
                            <div className='px-4 py-2 lg:p-4 flex justify-center items-center bg-[rgb(235,235,235)] dark:bg-black rounded-md'>
                                HTML
                            </div>
                            <div className='px-4 py-2 lg:p-4 flex justify-center items-center bg-[rgb(235,235,235)] dark:bg-black rounded-md'>
                                HTML
                            </div>
                        </motion.div>
                    </div>
                    <div className='space-y-6'>
                        <motion.div
                            initial={{ opacity: 0, translateX: -100 }}
                            whileInView={{
                                opacity: 1,
                                translateX: 0,
                            }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className='font-bold text-lg lg:text-xl tracking-wider'>
                                SEE LIVE
                            </h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, translateX: 100 }}
                            whileInView={{
                                opacity: 1,
                                translateX: 0,
                            }}
                            transition={{ duration: 1 }}
                            className='flex gap-4'
                        >
                            <div className='bg-violet-500 w-24 h-12 lg:w-40 hover:bg-violet-500/80 lg:text-xl font-bold rounded-lg text-white'>
                                <NavLink
                                    to='/'
                                    className='w-full h-full flex items-center justify-center'
                                >
                                    LIVE LINK
                                </NavLink>
                            </div>
                            <div className='bg-violet-500 w-24 h-12 lg:w-40 hover:bg-violet-500/80 lg:text-xl font-bold rounded-lg text-white'>
                                <NavLink
                                    to='/'
                                    className='w-full h-full flex items-center justify-center'
                                >
                                    GO BACK
                                </NavLink>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}
