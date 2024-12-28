import AboutComponent from './components/About';
import IntroductionComponent from './components/Introduction';
import NavbarComponent from './components/Navbar';
import { motion } from 'motion/react';

function App() {
    return (
        <>
            <NavbarComponent />
            <IntroductionComponent />
            <AboutComponent />
            <div className='w-full h-full p-4 lg:p-0 lg:h-screen flex flex-col gap-10 justify-center items-center bg-white'>
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
                        Here you will find some of the personal and clients
                        projects that I created with each project containing its
                        own case study
                    </p>
                </motion.div>
            </div>
        </>
    );
}

export default App;
