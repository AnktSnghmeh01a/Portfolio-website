import React from 'react'
import Project from './Project.jsx'
import { useDarkMode } from "../darkMode/DarkMode.jsx";
import projectsArray from '../../ProjectsData/projectdta.js';
import {Slide,Fade} from "react-awesome-reveal";

const Projects = () => {
  const {dark} = useDarkMode();
  return (
    <div className = {`projects w-full min-h-full p-5 flex flex-col flex-wrap gap-4 ${dark?'bg-gradient-to-r from-zinc-900 to-neutral-600':'bg-gradient-to-r from-indigo-600 to-fuchsia-700'} pt-18 overflow-x-hidden pb-20`} id='projects'>

     <Slide duration={2000}>
            <h1 className='text-center text-5xl text-purple-400 my-10  max-[737px]:text-4xl'>Explore <span className='text-white max-[737px]:text-3xl'>my Work🕵</span> </h1>
     </Slide>

   <div className='flex flex-wrap justify-around min-h-full max-[737px]:gap-6 max-[737px]:pb-10'> 
      

      {
        projectsArray.map((value,index)=>{

         return <Fade duration={2000} cascade damping={0.5} key={index}><Project key={index} projectName = {value.projectName} projectImage={value.imageLink} githubLink={value.githubLink} liveLink={value.liveLink}/></Fade>
        })
      }
 

      </div>

     
   
      </div>
  )
}

export default Projects