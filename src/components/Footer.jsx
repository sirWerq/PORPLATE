import { SiInstagram } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaCopyright } from 'react-icons/fa';

export default function FooterComponent() {
    return (
        <div className='h-[363px] bg-black flex items-center justify-center text-white'>
            <div className='w-full lg:w-[60%] flex flex-col'>
                <div className='flex justify-between lg:justify-normal lg:gap-60 border-b pb-9 px-5'>
                    <div className='flex flex-col gap-3'>
                        <h5 className='font-semibold text-xl tracking-wider'>
                            SAY HELLO
                        </h5>
                        <a href='/'>rifqx1904@gmail.com</a>
                    </div>
                    <ol className='space-y-3'>
                        <li>
                            <SiInstagram className='w-6 h-6' />
                        </li>
                        <li>
                            <FaGithub className='w-6 h-6' />
                        </li>
                        <li>
                            <FaLinkedin className='w-6 h-6' />
                        </li>
                        <li>
                            <FaFacebook className='w-6 h-6' />
                        </li>
                    </ol>
                </div>
                <div className='p-5 flex items-center gap-2'>
                    <FaCopyright />
                    <p>sirWerq 2024</p>
                </div>
            </div>
        </div>
    );
}
