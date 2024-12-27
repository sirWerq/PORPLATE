import { IoCodeSlashSharp } from 'react-icons/io5';
import { motion } from 'motion/react';

export default function IntroductionComponent() {
    return (
        <div className='w-full h-screen flex flex-col gap-10 justify-center items-center bg-hero bg-cover bg-fixed relative'>
            <motion.div
                initial={{ opacity: 0, translateX: -100 }}
                whileInView={{
                    opacity: 1,
                    translateX: 0,
                }}
                transition={{ duration: 0.5 }}
            >
                <h1 className='font-bold text-3xl lg:text-5xl tracking-wide'>
                    HEY, I&apos;M RIFQI ALISBA
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
                <p className='lg:text-2xl'>
                    &quot; A Result-Oriented Web Developer building and managing
                    Websites and Web Applications that leads to the success of
                    the overall product &quot;
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, translateX: -100 }}
                whileInView={{
                    opacity: 1,
                    translateX: 0,
                }}
                transition={{ duration: 1 }}
            >
                <button className='bg-violet-500 lg:text-xl font-bold p-5 rounded-lg text-white'>
                    PROJECTS
                </button>
            </motion.div>
            <div className='absolute bottom-2'>
                <IoCodeSlashSharp className='w-10 h-10' />
            </div>
        </div>
    );
}
