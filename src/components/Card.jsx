import { motion } from 'motion/react';

// eslint-disable-next-line react/prop-types
export default function Card({ image, title, description, link }) {
    return (
        <div className='flex flex-col lg:flex-row items-center gap-10'>
            <motion.div
                initial={{ opacity: 0, translateX: -100 }}
                whileInView={{
                    opacity: 1,
                    translateX: 0,
                }}
                transition={{ duration: 0.5 }}
                className='flex-1 rounded-sm overflow-hidden'
            >
                <img src={image} alt={title} className='w-full h-full' />
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
                <h5 className='font-bold text-2xl'>{title}</h5>
                <p>{description}</p>
                <div className='bg-violet-500 w-40 h-12 hover:bg-violet-500/80 lg:text-xl font-bold rounded-lg text-white'>
                    <a
                        href={link}
                        target='_blank'
                        className='w-full h-full flex items-center justify-center'
                    >
                        SEE DETAILS
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
