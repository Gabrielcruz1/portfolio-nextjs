import React from 'react'

const About = () => {
    return (
        <div className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'> About</p>
                    <h2 className='py-4'> Who am i</h2>
                    <p className='py-2 text-gray-600'> im not your normal dev</p>
                    <p className='py-2 text-greay-600'>  lorem ipsum bio inspire inspire </p>
                    <p className='py-2 text-greay-600'> lorem ipsum more inspiration </p>
                    <p className='py-2 text-greay-600 underline cursor-pointer'> check out my latest projects</p>

                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <img className='rounded-xl' src=".png" />
                </div>
            </div>
        </div>
    )
}

export default About