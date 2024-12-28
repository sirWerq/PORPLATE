import NavbarComponent from './Navbar';

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
    return (
        <>
            <NavbarComponent />
            <main>{children}</main>
        </>
    );
}
