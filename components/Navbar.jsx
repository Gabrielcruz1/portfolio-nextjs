import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image src="/../public/assets/navLogo.png" alt="/" width='125' height='50' />
                <div>
                    <ul className='hidden md:flex'>
                        <Link href=''>
                            <li className='ml-10 text-sm uppercase 
                    hover:border-b'>HOME </li>
                        </Link>
                        <Link href=''>
                            <li className='ml-10 text-sm uppercase hover:border-b'>about</li>
                        </Link>
                        <Link href=''>
                            <li className='ml-10 text-sm uppercase hover:border-b'>skills</li>
                        </Link>
                        <Link href=''>
                            <li className='ml-10 text-sm uppercase hover:border-b'>projects </li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>contact </li>
                        </Link>
                    </ul>
                    <div className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>


            <div className='fixed left-0 top-0 w-full h-screen bg-black/70'>
                <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image src='/../public/assets/navLogo.png' width='87' height='35' alt='/' />
                            <div>
                                <AiOutlineClose/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar