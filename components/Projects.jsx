import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import ProjectItem from './ProjectItem'
import TaskManager from '../public/assets/projects/taskmanager.png'
import Twitter from '../public/assets/projects/twitter.png'
import RicknMorty from '../public/assets/projects/ricknmorty.png'

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651ef]'>Projects</p>
                <h2 className='py-4'>What I've built</h2>
                <div className='grid md:grid-cols-2 gap-8'>

                    <ProjectItem title='Task Manager' backgroundImg={TaskManager} projectUrl='https://taskmanage.herokuapp.com/' githubUrl='https://github.com/Gabrielcruz1/django_taskmanager' projectDesc='Application developed in an agile environment using Python, Django, PSQL, HTML, and
							CSS. Application allows users to create, view, update, mark as complete and delete tasks. Responsive task search feature enables users to search for tasks based on keywords. To test live site, login with username: Test password: usertest'/>

                    <ProjectItem title='Twitter 2.0' backgroundImg={Twitter} projectUrl='https://twittertwopoint0.netlify.app/' githubUrl='https://github.com/SpeakerTwitter/frontend' projectDesc='Built using Mongo, Express, React, Node.js (MERN). Reverse engineered Twitter and created a seamless user experience. This application allows users to create tweets, comment on them, view tweets,
					and delete them. (CRUD)' />

                    <ProjectItem title='Rick n Morty Wiki' backgroundImg={RicknMorty} projectUrl='https://rickandmortywiki-app.netlify.app/' githubUrl='https://github.com/Gabrielcruz1/project2' projectDesc='Responsive front-end application that allows users to navigate through and examine data from a third party API in a customized way. Built using React.js and utilizing the react router library.' />



                </div>
            </div>
        </div>
    )
}

export default Projects