import { motion } from 'motion/react';
import Card from './Card';

export default function ProjectComponent() {
    return (
        <div className='w-full h-full px-2 py-10 lg:p-7 flex flex-col gap-10 items-center bg-white'>
            <motion.div
                initial={{ opacity: 0, translateX: -100 }}
                whileInView={{
                    opacity: 1,
                    translateX: 0,
                }}
                transition={{ duration: 0.5 }}
                className='inline-block relative mt-10 lg:mt-0'
            >
                <h2 className='font-bold text-2xl lg:text-3xl tracking-wider'>
                    PROJECTS
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
                    Here you will find some of the personal and clients projects
                    that I created with each project containing its own case
                    study
                </p>
            </motion.div>
            <div className='w-[75%] mt-9 space-y-8'>
                <Card />
                <Card />
                <div className='text-center p-4'>
                    <a href='' className='text-blue-800'>
                        See More!
                    </a>
                </div>
            </div>
        </div>
    );
}