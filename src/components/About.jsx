import { RiNextjsFill } from 'react-icons/ri';
import { TbBrandVite } from 'react-icons/tb';
import { FaBootstrap } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { motion } from 'motion/react';
import { FaReact } from 'react-icons/fa';

export default function AboutComponent() {
    return (
        <div className='w-full h-full px-2 py-10 lg:p-7 flex flex-col gap-10 items-center dark:bg-[#121212]'>
            <motion.div
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{
                    opacity: 1,
                    translateY: 0,
                }}
                transition={{ duration: 0.5 }}
                className='inline-block relative mt-10 lg:mt-0'
            >
                <h2 className='font-bold text-2xl lg:text-3xl tracking-wider dark:text-white'>
                    OVERVIEW
                </h2>
                <div className='absolute -bottom-5 left-[50%] -translate-x-[50%] w-[20%] h-[5px] bg-violet-500'></div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{
                    opacity: 1,
                    translateY: 0,
                }}
                transition={{ duration: 0.5 }}
            >
                <p className='lg:text-2xl text-center dark:text-white'>
                    Here you will find more information about me, what I do, and
                    my current skills mostly in terms of programming and
                    technology
                </p>
            </motion.div>
            <div className='flex w-full flex-col lg:flex-row px-4 lg:px-11 space-x-3 space-y-4 lg:space-y-0 overflow-hidden'>
                <motion.div
                    initial={{ opacity: 0, translateX: -100 }}
                    whileInView={{
                        opacity: 1,
                        translateX: 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className='lg:flex-1 flex flex-col items-center space-y-9'
                >
                    <h3 className='font-semibold text-xl dark:text-white'>
                        Education
                    </h3>
                    <ol className='relative border-s border-gray-200 dark:border-white'>
                        <li className='mb-10 ms-4'>
                            <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-white'></div>
                            <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-white'>
                                2022 - Present
                            </time>
                            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                                Indraprasta PGRI of University
                            </h3>
                            <p className='mb-4 text-base font-normal text-gray-500 dark:text-white'>
                                I am a student at Indraprasta PGRI University
                                majoring in Informatics Engineering. I entered
                                in 2022 and remain a student until now
                            </p>
                        </li>
                        <li className='mb-10 ms-4'>
                            <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-white'></div>
                            <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-white'>
                                Sep 2024 - Dec 2024
                            </time>
                            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                                Bangkit Academy
                            </h3>
                            <p className='text-base font-normal text-gray-500 dark:text-white'>
                                I am a cohort at Bangkit academy. I learn about
                                cloud computing on that
                            </p>
                        </li>
                    </ol>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateX: 100 }}
                    whileInView={{
                        opacity: 1,
                        translateX: 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className='lg:flex-1 flex flex-col text-center space-y-9'
                >
                    <h3 className='font-semibold text-xl dark:text-white'>
                        Skills
                    </h3>
                    <div className='lg:px-9 space-y-1 dark:text-white'>
                        <div className='flex items-center w-full'>
                            <span className='text-center font-bold text-lg whitespace-nowrap relative'>
                                Frameworks
                            </span>
                            <div className='flex-grow h-[1px] bg-gray-300 ml-4'></div>
                        </div>
                        <div className='space-y-2'>
                            <div className='flex gap-4 items-center'>
                                <div className='w-9 h-9 rounded-full p-1'>
                                    <RiNextjsFill className='w-full h-full' />
                                </div>
                                <p>Next Js</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='w-9 h-9 rounded-full p-1'>
                                    <TbBrandVite className='w-full h-full text-fuchsia-500' />
                                </div>
                                <p>Vite</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='w-9 h-9 rounded-full p-1'>
                                    <FaBootstrap className='w-full h-full text-[rgb(148,105,198)]' />
                                </div>
                                <p>Bootstrap</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='w-9 h-9 rounded-full p-1'>
                                    <RiTailwindCssFill className='w-full h-full text-[rgb(56,189,248)]' />
                                </div>
                                <p>Tailwind</p>
                            </div>
                        </div>
                        <div className='flex items-center w-full'>
                            <span className='text-center font-bold text-lg whitespace-nowrap relative'>
                                Libraries
                            </span>
                            <div className='flex-grow h-[1px] bg-gray-300 ml-4'></div>
                        </div>
                        <div className='space-y-2'>
                            <div className='flex gap-4 items-center'>
                                <div className='w-9 h-9 rounded-full p-1'>
                                    <FaReact className='w-full h-full text-sky-500' />
                                </div>
                                <p>React Js</p>
                            </div>
                        </div>
                        <div className='flex items-center w-full'>
                            <span className='text-center font-bold text-lg whitespace-nowrap relative'>
                                Languages
                            </span>
                            <div className='flex-grow h-[1px] bg-gray-300 ml-4'></div>
                        </div>
                        <div className='space-y-2'>
                            <div className='flex gap-4 items-center'>
                                <div className='w-9 h-9 rounded-full p-1'>
                                    <FaHtml5 className='w-full h-full text-[rgb(221,75,37)]' />
                                </div>
                                <p>{'HTML (Markup Language)'}</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='w-9 h-9 rounded-full p-1'>
                                    <FaCss3 className='w-full h-full text-blue-500' />
                                </div>
                                <p>{'CSS (Cascading Styling)'}</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='w-9 h-9 rounded-full p-2'>
                                    <IoLogoJavascript className='w-full h-full text-yellow-500' />
                                </div>
                                <p>JavaScript</p>
                            </div>
                            <div>
                                <div className='flex gap-4 items-center'>
                                    <div className='w-9 h-9 rounded-full p-2'>
                                        <SiTypescript className='w-full h-full text-blue-600' />
                                    </div>
                                    <p>TypeScript</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center w-full'>
                            <span className='text-center font-bold text-lg whitespace-nowrap relative'>
                                Ecosystems
                            </span>
                            <div className='flex-grow h-[1px] bg-gray-300 ml-4'></div>
                        </div>
                        <div className='space-y-2'>
                            <div className='flex gap-4 items-center'>
                                <div className='w-9 h-9 rounded-full p-1'>
                                    <FaNodeJs className='w-full h-full text-green-600' />
                                </div>
                                <p>Node Js</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='w-9 h-9 rounded-full p-1'>
                                    <FaGithub className='w-full h-full' />
                                </div>
                                <p>Github</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='w-9 h-9 rounded-full p-1'>
                                    <FaGitAlt className='w-full h-full text-orange-500' />
                                </div>
                                <p>Git</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
