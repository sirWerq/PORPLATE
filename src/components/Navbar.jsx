import profileImage from '../assets/profile.jpg';
import { RxHamburgerMenu } from 'react-icons/rx';

import { useState } from 'react';

export default function NavbarComponent() {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    const handleHamburger = () => {
        console.log('ok');

        setHamburgerMenu((hamburgerMenu) => !hamburgerMenu);
    };

    return (
        <header className='w-full flex justify-between items-center fixed py-[1rem] px-2 lg:px-[5rem] z-10 bg-white border-b border-slate-300'>
            <div className='flex items-center space-x-5'>
                <img
                    src={profileImage}
                    alt=''
                    className='w-12 h-12 rounded-full'
                />
                <p className='font-bold text-xl tracking-wider'>Rifqi Alisba</p>
            </div>
            <nav
                className={`${
                    hamburgerMenu ? 'block' : 'hidden'
                } absolute top-full right-0 lg:relative w-full lg:w-auto text-end lg:text-inherit bg-white lg:block`}
            >
                <ul className='flex lg:gap-5 flex-col lg:flex-row'>
                    <li>
                        <a
                            href=''
                            className='p-4 font-bold w-full block border-b lg:border-none'
                        >
                            HOME
                        </a>
                    </li>
                    <li>
                        <a
                            href=''
                            className='p-4 font-bold w-full block border-b lg:border-none'
                        >
                            OVERVIEW
                        </a>
                    </li>
                    <li>
                        <a
                            href=''
                            className='p-4 font-bold w-full block border-b lg:border-none'
                        >
                            PROJECTS
                        </a>
                    </li>
                    <li>
                        <a
                            href=''
                            className='p-4 font-bold w-full block border-b lg:border-none'
                        >
                            CONTACT
                        </a>
                    </li>
                </ul>
            </nav>
            <div
                className='w-[27px] h-[27px] lg:hidden cursor-pointer'
                onClick={handleHamburger}
            >
                <RxHamburgerMenu className='w-full h-full' />
            </div>
        </header>
    );
}
