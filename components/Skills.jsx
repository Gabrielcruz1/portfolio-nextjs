import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/html.png';
import Css from '../public/assets/css.png';
import Javascript from '../public/assets/javascript.png';
import reactLogo from '../public/assets/react.png';
import pythonLogo from '../public/assets/python.jpg'
import djangoLogo from '../public/assets/django.jpg'
import flaskLogo from '../public/assets/flask.png'
import postgres from '../public/assets/postgres.png'
import mongoLogo from '../public/assets/mongo.png'
import expressLogo from '../public/assets/expressjs.png'
import nodeLogo from '../public/assets/node.png'
import twindLogo from '../public/assets/tailwind.png'


const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'> Skills</p>
                <h2 className='py-4'>What I Code With</h2>
                <div className=' m-2 grid md:grid-cols-2 lg:grid-cols-4 gap-8 '>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={Html} width={64} height={64}/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3> HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src={Css} width={64} height={64}/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3> CSS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src={Javascript} width={64} height={64}/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src={pythonLogo} width={64} height={64}/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Python</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src={reactLogo} width={64} height={64}/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src={djangoLogo} width={64} height={64}/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Django</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src={flaskLogo} width={64} height={64}/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Flask</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src={postgres} width={64} height={64}/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>PostgreSQL</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src={mongoLogo} width={64} height={64}/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>MongoDb</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src={expressLogo} width={64} height={64}/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Express.js</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src={nodeLogo} width={64} height={64}/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Node.js</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src={twindLogo} width={64} height={64}/>
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