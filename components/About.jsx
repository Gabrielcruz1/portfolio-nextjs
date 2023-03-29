import React from 'react'
import Image from 'next/image'
import Headshot from '../public/assets/projects/headshot.jpg'
import Link from 'next/link'

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'> About</p>
                    <h2 className='py-4'> Who am I</h2>
                    <p className='py-2 text-gray-600'> I'm not your normal developer</p>
                    <p className='py-2 text-greay-600'>  </p>
                    <p className='py-2 text-greay-600'>  </p>
                    <Link href='/#projects'>
                        <p className='py-2 text-greay-600 underline cursor-pointer'> Check out my latest projects!</p>
                    </Link>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image className='rounded-xl' src={Headshot} alt={Headshot} />
                </div>
            </div>
        </div>
    )
}

export default About