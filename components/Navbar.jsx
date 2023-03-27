import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

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
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
            {/* <div className='fixed left-0 top-0 w-full h-screen bg-black/70'> */}
                
            </div>
        </div>
    )
}

export default Navbar