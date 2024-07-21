
import React from 'react'
import { useDarkMode } from '../darkMode/DarkMode.jsx'
import img from "../.././assets/home-assert.jpg"

const Home = () => {

  const {dark,toggleDarkMode} = useDarkMode() 

  return (
    <div className="w-full min-h-full flex dark:bg-gradient-to-r from-slate-800 via-purple-400 to-purple-800 p-3 mt-10 max-[737px]:flex-col-reverse max-[737px]:justify-items-center max-[737px]:mt-16 overflow-scroll" id='home'>

{/* left-portion-home */}
      <div className="left-portion-home  w-1/2 flex flex-col p-10 gap-16 max-[737px]:w-full">
      
        <div className="text-portion-home flex flex-col pt-20 gap-3 max-[737px]:pt-5 max-[737px]:justify-items-center">
        
         <h1 className='text-black text-4xl dark:text-white'>Hello ,<span className='text-purple-500 max-[737px]:dark:text-neutral-200'>I am </span> </h1>
         <h1 className='text-purple-600 text-5xl max-[737px]:text-4xl dark:text-purple-400 max-[737px]:dark:text-neutral max-[737px]:font-medium'>Ankit Singh Mehra</h1>

         <div className='mt-3 typing-text-home' id='typing-text-home'>
          
          <p className='text-3xl text-white max-[737px]:text-2xl bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg'  id='home-text-1'>Front-End Developer</p>
          <p className='text-white text-3xl max-[737px]:text-2xl bg-gradient-to-r from-violet-500 to-zinc-400 rounded-lg' id='home-text-2'>Full-Stack Developer</p>

           </div>
        
      </div>

        {/* buttons */}
        <div className="buttons-home flex gap-4">

        <button className="bg-gradient-to-r from-pink-300 via-purple-500 to-purple-800 p-3 rounded-lg px-6 text-white hover:from-pink-500 hover:to-yellow-500 max-[737px]:px-4">Contact me</button>
      
        <button className="border-2 border-purple-400 p-3 rounded-lg text-white font-normal px-6 hover:bg-gradient-to-r from-purple-500 to-pink-500 max-[737px]:px-4">About me</button>
      
        </div>
      
      </div>
      
         {/* right portion */}
      <div className="right-portion-home w-1/2 relative max-[737px]:w-full max-[737px]:flex max-[737px]:justify-items-center max-[737px]:items-center max-[737px]:p-2 z-20">

         <div className="side-balls-1 rounded-full w-20 h-20  absolute -left-7 top-10 bg-gradient-to-r from-violet-600 to-red-400 max-[737px]:-top-2 max-[737px]:-left-3 max-[737px]:h-12 max-[737px]:w-12"></div>

         <div className="img-div-home rounded-3xl overflow-hidden mt-20 z-30 h-11/12 w-10/12 max-[737px]:mt-0 max-[737px]:w-full relative">
         <img src={img} alt="" className='w-full h-full'/>
         </div>

      </div>
    </div>
  )
}

export default Home
