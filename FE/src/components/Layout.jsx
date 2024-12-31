import NavbarComponent from './Navbar';
import { Outlet } from 'react-router-dom';
import useStore from '../store/store';
import FooterComponent from './Footer';

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
