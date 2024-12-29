import { motion } from 'motion/react';
import Card from './Card';
import animeListProject from '../assets/animelist.png';
import ccidWebProject from '../assets/ccidweb.png';

export default function ProjectComponent() {
    return (
        <div className='w-full h-full px-2 py-10 lg:p-7 flex flex-col gap-10 items-center bg-white dark:bg-black dark:text-white'>
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
            <div className='w-[75%] mt-9 space-y-8 overflow-hidden'>
                <Card
                    image={animeListProject}
                    title={'AnimeList Web'}
                    description={`A web app that provides information about animes. you can search animes here or you can browse all the animes. only for anime list. [you can see this website by clicking the button and in the future more feature will updated]`}
                    link={'/'}
                />
                <Card
                    image={ccidWebProject}
                    title={'CCID Circle Web'}
                    description={`I contributed to my friend's website by resolving UI bugs, including issues with dark mode, background inconsistencies, and more. My role focused on enhancing the sites visual stability and user experience.`}
                    link={'/'}
                />
                <div className='text-center p-4'>
                    <a
                        href='/projects'
                        className='text-violet-500 hover:text-violet-500/80'
                    >
                        See More!
                    </a>
                </div>
            </div>
        </div>
    );
}
