import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TaskManager from '../public/assets/projects/taskmanager.png'
import Twitter from '../public/assets/projects/twitter.png'
import RicknMorty from '../public/assets/projects/RicknMorty.png'

const ProjectItem = ({title, backgroundImg, projectUrl, githubUrl, projectDesc}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        {/* <p className='pb-4 pt-2 text-white text-center'>{projectDesc}</p> */}
        <Link href={githubUrl} target='_blank'>
            <p className='text-center py-3 rounded-lg bg-white text-grey-700 font-bold text-lg cursor-pointer mt-4'>More Info</p>
        </Link>
        <Link href={projectUrl} target='_blank'>
            <p className='text-center py-3 rounded-lg bg-white text-grey-700 font-bold text-lg cursor-pointer mt-4'>Live Site</p>
        </Link>
        <Link href={githubUrl} target='_blank'>
            <p className='text-center py-3 rounded-lg bg-white text-grey-700 font-bold text-lg cursor-pointer mt-4'>Github</p>
        </Link>
    </div>
</div>
  )
}

export default ProjectItem