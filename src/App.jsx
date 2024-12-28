import AboutComponent from './components/About';
import IntroductionComponent from './components/Introduction';
import NavbarComponent from './components/Navbar';
import ProjectComponent from './components/Projects';
// import { motion } from 'motion/react';

function App() {
    return (
        <>
            <NavbarComponent />
            <IntroductionComponent />
            <AboutComponent />
            <ProjectComponent />
        </>
    );
}

export default App;
