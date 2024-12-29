import profileImage from '../assets/profile.jpg';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GoMoon } from 'react-icons/go';
import { FaRegSun } from 'react-icons/fa6';
import { useState } from 'react';
import { NavLink } from 'react-router';
import useStore from '../store/store';

export default function NavbarComponent() {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);
    const { darkMode, setDarkMode } = useStore();

    const handleHamburger = () => {
        setHamburgerMenu((hamburgerMenu) => !hamburgerMenu);
    };

    return (
        <header className='w-full flex justify-between items-center fixed top-0 py-[1rem] px-2 lg:px-[5rem] z-10 bg-white border-b border-slate-300 dark:border-slate-800 dark:bg-black'>
            <div className='flex items-center space-x-5'>
                <img
                    src={profileImage}
                    alt=''
                    className='w-12 h-12 rounded-full'
                />
                <p className='font-bold text-xl tracking-wider dark:text-white'>
                    Rifqi Alisba
                </p>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <nav
                    className={`${
                        hamburgerMenu ? 'block animate-fade-in' : 'hidden'
                    } absolute top-full right-0 lg:relative w-full lg:w-auto text-end lg:text-inherit bg-white dark:bg-black lg:block`}
                >
                    <ul className='flex lg:gap-5 flex-col lg:flex-row'>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    `${
                                        isActive
                                            ? 'text-violet-500 hover:text-violet-500/80'
                                            : 'text-black hover:text-slate-700 dark:text-white dark:hover:text-slate-300'
                                    } p-4 font-bold w-full block border-b dark:border-slate-800 lg:border-none`
                                }
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/projects'
                                className={({ isActive }) =>
                                    `${
                                        isActive
                                            ? 'text-violet-500 hover:text-violet-500/80'
                                            : 'text-black hover:text-slate-700 dark:text-white dark:hover:text-slate-300'
                                    } p-4 font-bold w-full block border-b dark:border-slate-800 lg:border-none`
                                }
                            >
                                PROJECTS
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div
                    className='w-[27px] h-[27px] lg:hidden cursor-pointer'
                    onClick={handleHamburger}
                >
                    <RxHamburgerMenu className='w-full h-full dark:text-white' />
                </div>
                <div className='w-[27px] h-[27px]'>
                    <button className='w-full h-full' onClick={setDarkMode}>
                        {darkMode ? (
                            <FaRegSun className='w-full h-full hover:text-slate-600 dark:text-white dark:hover:text-slate-300' />
                        ) : (
                            <GoMoon className='w-full h-full hover:text-slate-600' />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}
