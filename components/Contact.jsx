import React from 'react'
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
            <div className='max-w-[900px] m-auto px-2 py-16 w-full'>
                <div className='text-center'>
                    <p className='text-xl tracking-widest uppercase text-[#0f5ad2]'>Contact</p>
                    <h2 className='py-4'>Get In Touch</h2>
                </div>

                <div className='grid lg:grid-cols-2 gap-8'>

                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        {/* <div> */}
                            {/* Header  */}
                            <p className='flex items-center justify-center uppercase py-4 text-[#0f5ad2]'>Connect With Me</p>
                            <div className='flex items-center justify-center py-2'>
                                    <a href="https://www.linkedin.com/in/gabrielcruz2023/" target="__blank">
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 mr-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                                            <FaLinkedinIn />
                                        </div>
                                    </a>
                                    <a href="https://github.com/Gabrielcruz1" target="_blank">
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 mr-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                                            <FaGithub />
                                        </div>
                                    </a>
                                    <a href="https://docs.google.com/document/d/1bfB0XrM8KFNJ-8W-FQ6s64L-UWHTWDdn9gB6i7dc2wY/edit?usp=sharing"
                                        target="_blank">
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                            <BsFillPersonLinesFill />
                                        </div>
                                    </a>
                            </div>
                        {/* </div> */}
                        <div className='p-4'>
                            <form  id="SubmitForm" ref={formRef}>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-1'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='border-2 rounded-lg p-2 flex border-gray-300' type="text" name="user_name" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input className='border-2 rounded-lg p-2 flex border-gray-300' type="text" name="user_phonenumber" />
                                    </div>
                                </div>
                                <div className='flex flex-col py-1'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-2 flex border-gray-300' type="email" name="user_email"/>
                                </div>
                                <div className='flex flex-col py-1'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-2 flex border-gray-300' type="text" name="user_subject"/>
                                </div>
                                <div className='flex flex-col py-1'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-2 border-gray-300' rows='8' name="message"/>
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
                            < HiOutlineChevronDoubleUp className='text-[#0f5ad2]' size={30} />
                        </div>

                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Contact