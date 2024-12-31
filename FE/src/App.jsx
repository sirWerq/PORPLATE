import AboutComponent from './components/About';
import ContactComponent from './components/Contact';
import IntroductionComponent from './components/Introduction';
import ProjectComponent from './components/Projects';

function App() {
    return (
        <div>
            <div className='w-full h-screen flex flex-col gap-6 md:gap-10 justify-center items-center bg-hero dark:bg-heroDark bg-cover bg-fixed relative'>
                <IntroductionComponent />
            </div>
            <div className='w-full h-full px-2 py-10 lg:p-7 flex flex-col gap-10 items-center dark:bg-[#121212]'>
                <AboutComponent />
            </div>
            <div className='w-full h-full px-2 py-10 lg:p-7 flex flex-col gap-10 items-center bg-white dark:bg-black dark:text-white'>
                <ProjectComponent />
            </div>
            <div className='w-full h-full px-2 py-10 lg:p-7 flex flex-col gap-10 items-center bg-hero dark:bg-heroDark bg-cover bg-fixed dark:text-white overflow-hidden'>
                <ContactComponent />
            </div>
        </div>
    );
}

export default App;