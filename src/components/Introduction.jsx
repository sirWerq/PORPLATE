import { IoCodeSlashSharp } from 'react-icons/io5';
import { motion } from 'motion/react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function IntroductionComponent() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, translateX: -100 }}
                whileInView={{
                    opacity: 1,
                    translateX: 0,
                }}
                transition={{ duration: 0.5 }}
            >
                <h1 className='font-bold text-3xl lg:text-5xl tracking-wide dark:text-white'>
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
                <p className='lg:text-2xl dark:text-white'>
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
                <div className='flex gap-10'>
                    <a href='https://github.com/sirWerq' target='_blank'>
                        <FaGithub className='text-black w-10 h-10 lg:w-16 lg:h-16 hover:text-black/70 dark:text-white dark:hover:text-slate-300' />
                    </a>
                    <a
                        href='https://www.instagram.com/rfqiags/'
                        target='_blank'
                    >
                        <FaInstagram className='text-black w-10 h-10 lg:w-16 lg:h-16 hover:text-black/70 dark:text-white dark:hover:text-slate-300' />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/rifqi-alisba-garwita-sutrisno-612852241/'
                        target='_blank'
                    >
                        <FaLinkedin className='text-black w-10 h-10 lg:w-16 lg:h-16 hover:text-black/70 dark:text-white dark:hover:text-slate-300' />
                    </a>
                </div>
            </motion.div>
            <div className='absolute bottom-2'>
                <IoCodeSlashSharp className='w-10 h-10 dark:text-white' />
            </div>
        </>
    );
}
