import React from 'react'
import Project from './Project.jsx'
import { useDarkMode } from "../darkMode/DarkMode.jsx";
import projectsArray from '../../ProjectsData/projectdta.js';

const Projects = () => {
  const {dark} = useDarkMode();
  return (
    <div className = {`projects w-full min-h-full p-5 flex flex-col flex-wrap gap-4 ${dark?'bg-gradient-to-r from-zinc-900 to-neutral-600':'bg-[#FEFEFA]'} pt-18 overflow-x-hidden pb-20`} id='projects'>


            <h1 className='text-center text-5xl text-black dark:text-[#F5FEFD] my-10  max-[737px]:text-4xl'>Explore <span className='text-[#A2A2A2] dark:text-white max-[737px]:text-3xl'>my Work🕵</span> </h1>

   <div className='flex flex-wrap justify-around min-h-full max-[737px]:gap-6 max-[737px]:pb-10'> 
      

      {
        projectsArray.map((value,index)=>{

         return <Project key={index} projectName = {value.projectName} projectImage={value.imageLink} githubLink={value.githubLink} liveLink={value.liveLink}/>
        })
      }
 

      </div>

     
   
      </div>
  )
}

export default Projects