import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import ProjectItem from './ProjectItem'
import TaskManager from '../public/assets/projects/taskmanager.png'
import Twitter from '../public/assets/projects/twitter.png'
import RicknMorty from '../public/assets/projects/RicknMorty.png'

const Projects = () => {
    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651ef]'>Projects</p>
                <h2 className='py-4'>What I've built</h2>
                <div className='grid md:grid-cols-2 gap-8'>

            <ProjectItem title='Task Manager' backgroundImg={TaskManager} projectUrl='/' />

            <ProjectItem title='Twitter 2.0' backgroundImg={Twitter} projectUrl='/' />

            <ProjectItem title='Rick n Morty Wiki' backgroundImg={RicknMorty} projectUrl='/' />


               
                </div>
            </div>
        </div>
    )
}

export default Projects