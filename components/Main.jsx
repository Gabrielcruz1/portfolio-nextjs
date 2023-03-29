import React from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>Lets build something </p>
                    <h1>Hi I'm <span className='text-[#5651e5]'>Gabriel</span></h1>
                    <h1 className='py-4 text-gray-700'> Full Stack Web Developer</h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        A software engineer passionate about developing innovative and scalable solutions to complex problems. With a background in both crisis management and behavioral therapy, I provide a distinct perspective that enables me to empower organizations with innovative software solutions. I thrive in dynamic, collaborative environments where I utilize my strong problem-solving, communication, and leadership skills to drive successful outcomes.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <a href="https://www.linkedin.com/in/gabrielcruz2023/" target="__blank">
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a href="https://github.com/Gabrielcruz1" target="_blank">
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub />
                            </div>
                        </a>
                        {/* <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div> */}
                        <a href="https://docs.google.com/document/d/1O3_h_3UQ4KjyUHWRO4osxnLjsUUd9uSdzwyp3t1nDo4/edit?usp=sharing"
                            target="_blank">
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <BsFillPersonLinesFill />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main