import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { FaLinkedin ,FaGithub,FaTwitter,FaInstagram } from "react-icons/fa6";
import { useDarkMode } from '../darkMode/DarkMode';

const Footer = () => {
  const {dark} = useDarkMode()
  return (
    <div className = {`min-h-1/4 w-full ${dark?'bg-gradient-to-r from-zinc-700 to-slate-900':'bg-gradient-to-r from-violet-600 to-fuchsia-500'}  flex flex-col justify-center items-center gap-4 py-6`}>
      
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
   
       <div className="nav-links flex gap-4 text-white font-normal">
        <HashLink to={"#home"} className='hover:underline hover:text-black'>Home</HashLink>
        <HashLink to={"#about"} className='hover:underline  hover:text-black'>About</HashLink>
        <HashLink to={"#skills"} className='hover:underline  hover:text-black'>Skills</HashLink>
        <HashLink to={"#projects"} className='hover:underline  hover:text-black'>Projects</HashLink>
        <HashLink to={"#education"} className='hover:underline  hover:text-black'>Education</HashLink>

       </div>

     <p className='font-normal text-white cursor-pointer'>Made with <span className="hover:scale-75">❤️ </span>by Ankit</p>
     </div>
  )
}

export default Footer