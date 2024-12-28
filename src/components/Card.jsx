import porto_1 from '../assets/project-1.png';
import { motion } from 'motion/react';

export default function Card() {
    return (
        <div className='flex flex-col lg:flex-row items-center gap-10'>
            <motion.div
                initial={{ opacity: 0, translateX: -100 }}
                whileInView={{
                    opacity: 1,
                    translateX: 0,
                }}
                transition={{ duration: 0.5 }}
                className='flex-1'
            >
                <img src={porto_1} alt='' className='w-full h-full' />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, translateX: 100 }}
                whileInView={{
                    opacity: 1,
                    translateX: 0,
                }}
                transition={{ duration: 0.5 }}
                className='flex-1 space-y-6'
            >
                <h5 className='font-bold text-2xl'>Dopefolio</h5>
                <p>
                    Dopefolio is a successful Open-Source project that I created
                    which have been featured on some of the biggest tech sites
                    like CSS-Tricks, Hostinger, etc & used by thousands of
                    developers globally
                </p>
                <button className='bg-violet-500 lg:text-xl font-bold p-3 rounded-lg text-white'>
                    Case Study
                </button>
            </motion.div>
        </div>
    );
}
