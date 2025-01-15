import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { FaLinkedin ,FaGithub,FaTwitter,FaInstagram } from "react-icons/fa6";
import { useDarkMode } from '../darkMode/DarkMode';

const Footer = () => {
  const {dark} = useDarkMode()
  return (
    <div className = {`min-h-full w-full ${dark?'bg-gradient-to-r from-zinc-700 to-slate-900':'bg-[#EBEBEB]'}  flex flex-col justify-center items-center gap-10 p-6 `}>
      
      <div className="social-media-links w-full justify-center items-center flex gap-7">
         
         {/* Linkdin */}
         <a href="https://www.linkedin.com/in/ankit-singh-mehra-03a211245/" className='text-2xl text-blue-700 hover:scale-125  transition-all duration-300 ease-in-out' target='_blank'><FaLinkedin /></a>

        {/* Github */}
        <a href="https://www.linkedin.com/in/ankit-singh-mehra-03a211245/" className='text-2xl text-black hover:scale-125  transition-all duration-300 ease-in-out' target='_blank'><FaGithub/></a>

       {/* twitter */}
        <a href="https://www.linkedin.com/in/ankit-singh-mehra-03a211245/" className='text-2xl text-blue-600 hover:scale-125  transition-all duration-300 ease-in-out' target='_blank'><FaTwitter/></a>
       
       {/* instagram */}
       <a href="https://www.linkedin.com/in/ankit-singh-mehra-03a211245/" className='text-2xl text-orange-500 hover:scale-125  transition-all duration-300 ease-in-out' target='_blank'><FaInstagram/></a>
       
        </div>  
   
       <div className="nav-links flex gap-6 text-[#878787]  dark:text-white font-normal text-lg max-[737px]:gap-3"> 

           <HashLink to={"#home"} className='hover:underline hover:text-black text-lg max-[737px]:text-sm'>Home</HashLink> 

           <HashLink to={"#about"} className='hover:underline hover:text-black 
           text-lg max-[737px]:text-sm'>About</HashLink> 
   
           <HashLink to={"#skills"} className='hover:underline  hover:text-black text-lg max-[737px]:text-sm'>Skills</HashLink>   
       
           <HashLink to={"#projects"} className='hover:underline  hover:text-black text-lg max-[737px]:text-sm'>Projects</HashLink>   
       
           <HashLink to={"#education"} className='hover:underline  hover:text-black text-lg max-[737px]:text-sm'>Education</HashLink>  

       </div>

     <p className='font-normal text-[#878787]  dark:text-white cursor-pointer text-lg max-[737px]:text-sm'>Made with <span className="hover:scale-75">❤️ </span>by Ankit</p>
     
       </div>

  )
}

export default Footer