import NavbarComponent from './components/ui/Navbar';
import { Outlet } from 'react-router-dom';
import useStore from './store/store';
import FooterComponent from './components/ui/Footer';

export default function Layout() {
    const { darkMode } = useStore();

    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <NavbarComponent />
            <Outlet />
            <FooterComponent />
        </div>
    );
}
