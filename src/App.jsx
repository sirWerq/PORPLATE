import IntroductionComponent from './components/Introduction';
import NavbarComponent from './components/Navbar';

function App() {
    return (
        <>
            <NavbarComponent />
            <IntroductionComponent />
            <div className='w-full h-screen flex flex-col gap-10 justify-center items-center'>
                <div className='inline-block relative'>
                    <h2 className='font-bold text-xl lg:text-3xl tracking-wider'>
                        OVERVIEW
                    </h2>
                    <div className='absolute -bottom-5 left-[50%] -translate-x-[50%] w-[20%] h-[5px] bg-violet-500'></div>
                </div>
                <p>
                    Here you will find more information about me, what I do, and
                    my current skills mostly in terms of programming and
                    technology
                </p>
            </div>
            <div className='w-full h-screen flex justify-center items-center bg-white'>
                <p>test</p>
            </div>
        </>
    );
}

export default App;
