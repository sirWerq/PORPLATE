import reactImage from '../assets/react.svg';
import { motion } from 'motion/react';

export default function AboutComponent() {
    return (
        <div className='w-full h-full p-4 lg:p-0 lg:h-screen flex flex-col gap-10 justify-center items-center'>
            <motion.div
                initial={{ opacity: 0, translateX: -100 }}
                whileInView={{
                    opacity: 1,
                    translateX: 0,
                }}
                transition={{ duration: 0.5 }}
                className='inline-block relative mt-14 lg:mt-0'
            >
                <h2 className='font-bold text-2xl lg:text-3xl tracking-wider'>
                    OVERVIEW
                </h2>
                <div className='absolute -bottom-5 left-[50%] -translate-x-[50%] w-[20%] h-[5px] bg-violet-500'></div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, translateX: -100 }}
                whileInView={{
                    opacity: 1,
                    translateX: 0,
                }}
                transition={{ duration: 0.5 }}
            >
                <p className='lg:text-2xl text-center'>
                    Here you will find more information about me, what I do, and
                    my current skills mostly in terms of programming and
                    technology
                </p>
            </motion.div>
            <div className='flex w-full flex-col lg:flex-row px-4 lg:px-11 space-x-3 space-y-4 lg:space-y-0'>
                <motion.div
                    initial={{ opacity: 0, translateY: 100 }}
                    whileInView={{
                        opacity: 1,
                        translateY: 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className='lg:flex-1 flex flex-col items-center space-y-9'
                >
                    <h3 className='font-semibold text-xl'>Education</h3>
                    <ol className='relative border-s border-gray-200 dark:border-gray-700'>
                        <li className='mb-10 ms-4'>
                            <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
                            <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                                2022 - Present
                            </time>
                            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                                Indraprasta PGRI of University
                            </h3>
                            <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
                                I am a student at Indraprasta PGRI University
                                majoring in Informatics Engineering. I entered
                                in 2022 and remain a student until now
                            </p>
                        </li>
                        <li className='mb-10 ms-4'>
                            <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
                            <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                                Sep 2024 - Dec 2024
                            </time>
                            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                                Bangkit Academy
                            </h3>
                            <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
                                I am a cohort at Bangkit academy. I learn about
                                cloud computing on that
                            </p>
                        </li>
                    </ol>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: 100 }}
                    whileInView={{
                        opacity: 1,
                        translateY: 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className='lg:flex-1 flex flex-col text-center space-y-9'
                >
                    <h3 className='font-semibold text-xl'>Skills</h3>
                    <div className='lg:px-9 space-y-1'>
                        <div className='flex items-center w-full'>
                            <span className='text-center font-bold text-lg whitespace-nowrap relative'>
                                Framework
                            </span>
                            <div className='flex-grow h-[1px] bg-gray-300 ml-4'></div>
                        </div>
                        <ul className='space-y-2'>
                            <li className='flex gap-4 items-center'>
                                <div className='w-9 h-9 rounded-full bg-neutral-400 p-1'>
                                    <img
                                        src={reactImage}
                                        alt=''
                                        className='w-full h-full'
                                    />
                                </div>
                                <p className='text-sm'>Next Js</p>
                            </li>
                            <li className='flex gap-4 items-center'>
                                <div className='w-9 h-9 rounded-full bg-neutral-400 p-1'>
                                    <img
                                        src={reactImage}
                                        alt=''
                                        className='w-full h-full'
                                    />
                                </div>
                                <p>Vite</p>
                            </li>
                            <li className='flex gap-4 items-center'>
                                <div className='w-9 h-9 rounded-full bg-neutral-400 p-1'>
                                    <img
                                        src={reactImage}
                                        alt=''
                                        className='w-full h-full'
                                    />
                                </div>
                                <p>Bootstrap</p>
                            </li>
                            <li className='flex gap-4 items-center'>
                                <div className='w-9 h-9 rounded-full bg-neutral-400 p-1'>
                                    <img
                                        src={reactImage}
                                        alt=''
                                        className='w-full h-full'
                                    />
                                </div>
                                <p>Tailwind</p>
                            </li>
                        </ul>
                        <div className='flex items-center w-full'>
                            <span className='text-center font-bold text-lg whitespace-nowrap relative'>
                                Languages
                            </span>
                            <div className='flex-grow h-[1px] bg-gray-300 ml-4'></div>
                        </div>
                        <ul className='space-y-2'>
                            <li className='flex gap-4 items-center'>
                                <div className='w-9 h-9 rounded-full bg-neutral-400 p-1'>
                                    <img
                                        src={reactImage}
                                        alt=''
                                        className='w-full h-full'
                                    />
                                </div>
                                <p>{'HTML (Markup Language)'}</p>
                            </li>
                            <li className='flex gap-4 items-center'>
                                <div className='w-9 h-9 rounded-full bg-neutral-400 p-1'>
                                    <img
                                        src={reactImage}
                                        alt=''
                                        className='w-full h-full'
                                    />
                                </div>
                                <p>{'CSS (Cascading Styling)'}</p>
                            </li>
                            <li className='flex gap-4 items-center'>
                                <div className='w-9 h-9 rounded-full bg-neutral-400 p-1'>
                                    <img
                                        src={reactImage}
                                        alt=''
                                        className='w-full h-full'
                                    />
                                </div>
                                <p>JavaScript</p>
                            </li>
                            <li>
                                <li className='flex gap-4 items-center'>
                                    <div className='w-9 h-9 rounded-full bg-neutral-400 p-1'>
                                        <img
                                            src={reactImage}
                                            alt=''
                                            className='w-full h-full'
                                        />
                                    </div>
                                    <p>TypeScript</p>
                                </li>
                            </li>
                        </ul>
                        <div className='flex items-center w-full'>
                            <span className='text-center font-bold text-lg whitespace-nowrap relative'>
                                Ecosystems
                            </span>
                            <div className='flex-grow h-[1px] bg-gray-300 ml-4'></div>
                        </div>
                        <ul className='space-y-2'>
                            <li className='flex gap-4 items-center'>
                                <div className='w-9 h-9 rounded-full bg-neutral-400 p-1'>
                                    <img
                                        src={reactImage}
                                        alt=''
                                        className='w-full h-full'
                                    />
                                </div>
                                <p>Node Js</p>
                            </li>
                            <li className='flex gap-4 items-center'>
                                <div className='w-9 h-9 rounded-full bg-neutral-400 p-1'>
                                    <img
                                        src={reactImage}
                                        alt=''
                                        className='w-full h-full'
                                    />
                                </div>
                                <p>Github</p>
                            </li>
                            <li className='flex gap-4 items-center'>
                                <div className='w-9 h-9 rounded-full bg-neutral-400 p-1'>
                                    <img
                                        src={reactImage}
                                        alt=''
                                        className='w-full h-full'
                                    />
                                </div>
                                <p>Git</p>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
