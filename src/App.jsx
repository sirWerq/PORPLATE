import AboutComponent from './components/About';
import ContactComponent from './components/Contact';
import FooterComponent from './components/Footer';
import IntroductionComponent from './components/Introduction';
import ProjectComponent from './components/Projects';

function App() {
    return (
        <div>
            <IntroductionComponent />
            <AboutComponent />
            <ProjectComponent />
            <ContactComponent />
            <FooterComponent />
        </div>
    );
}

export default App;
