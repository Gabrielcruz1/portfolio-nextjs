import React from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_ps46qya', 'template_f6j5gt7', formRef.current, 'm0u2RAKR8JTwcmQ7_')
        .then((result) => {
            console.log(result.text);
            setDone(true)
            document.getElementById("SubmitForm").reset()
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
                <h2 className='py-4'>Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* left side  */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <img className='rounded-xl hover:scale-105 ease-in duration-300' src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29udGFjdCUyMHVzfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                            </div>
                            <div>
                                <h2 className='py-2'>Gabriel Cruz</h2>
                                <p>Full-Stack Developer</p>
                                <p className='py-4'>I'm available for freelance or full-time positions. Contact me and lets talk.</p>
                            </div>
                            <div>
                                <p className='uppercase py-4 text-[#5651e5]'>Connect With Me</p>
                                <div className='flex items-center justify-between py-4'>
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


                    {/* Right side */}
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form  id="SubmitForm" ref={formRef}>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="user_name" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="user_phonenumber" />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name="user_email"/>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="user_subject"/>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name="message"/>
                                </div>
                                <button onClick={handleSubmit} className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                                {done && alert("Thank you. Your email was sent.")}
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/#home' scroll={false} >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            < HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
                        </div>

                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Contact