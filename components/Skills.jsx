import Image from 'next/image';
import React from 'react';

const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'> skills</p>
                <h2 className='py-4'>What I Code With</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 '>

                    <div className='p-6 shadow-xl rounded-xl hover: scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/assets/html.png' width={64} height={64}/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3> HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover: scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src='/../public/assets/css.png' width={64} height={64}/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3> CSS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover: scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src='/../public/assets/javascript.png' width={64} height={64}/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover: scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src='/../public/assets/python.jpg' width={64} height={64}/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Python</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover: scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src='/../public/assets/react.png' width={64} height={64}/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover: scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src='/../public/assets/django.jpg' width={64} height={64}/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Django</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover: scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src='/../public/assets/flask.png' width={64} height={64}/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Flask</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover: scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src='/../public/assets/postgres.png' width={64} height={64}/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>PostgreSQL</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover: scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src='/../public/assets/mongo.png' width={64} height={64}/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>MongoDb</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover: scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src='/../public/assets/expressjs.png' width={64} height={64}/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Express.js</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover: scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src='/../public/assets/node.png' width={64} height={64}/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Node.js</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover: scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src='/../public/assets/tailwind.png' width={64} height={64}/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
             



                </div>
            </div>
        </div>
    )
}

export default Skills