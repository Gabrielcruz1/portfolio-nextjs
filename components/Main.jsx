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
                    With 3+ years of experience building scalable, user-focused applications, I specialize in turning complex problems into clean, maintainable solutions—whether it's debugging enterprise React codebases, optimizing CI pipelines, or leading end-to-end test automation. I thrive in dynamic, collaborative teams where I blend technical depth with strong communication and leadership to drive meaningful impact.
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
                        <a href="https://docs.google.com/document/d/1WCD5VKLznG5YOtoxAUa4bmTJOb_FHBan7eYxtPe59xQ/edit?usp=sharing"
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