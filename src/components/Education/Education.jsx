import React from "react";
import ssjlogo from "../../assets/education-assert/Soban_Singh_Jeena_University-logo.webp";
import beershebalogo from "../../assets/education-assert/beersheba-logo.webp";
import graphiceralogo from "../../assets/education-assert/graphic_era_logo_1.jpg" 
import { useDarkMode } from "../darkMode/DarkMode";

const Education = () => {
  const { dark } = useDarkMode()
  return (

    <div className={`min-h-full w-full flex flex-col p-3 py-10 gap-6 text-black relative justify-center ${dark ? 'bg-gradient-to-r from-zinc-700 to-slate-900' : 'bg-[#EBEBEB]'} pt-16`}>

         <h1 className={`max-[900px]:text-4xl text-5xl text-center mb-10 text-black dark:text-white font-medium`} id="education">Education👨🏻‍🎓</h1>



      <div className="content-education-part flex flex-col min-h-full w-full gap-9 justify-center items-center mb-10 min-[900px]:justify-start max-[900px]:items-start">



        {/* GEHU Bhimatal*/}
          <div className="education-info flex flex-col h-max w-max p-5 justify-center items-center gap-3 max-[455px]:w-5/6 rounded-2xl px-4 bg-gradient-to-r from-pink-500 to-violet-600 shadow-sm shadow-white cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out">

            <div className="logo-div w-32 h-32 border rounded-lg overflow-hidden bg-white mb-2  hover:scale-75 transition-all duration-500 ease-in-out">
              <img
                src={graphiceralogo}
                alt="ssjlogo"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="infomation flex flex-col items-center gap-2">
              <h1 className="text-center font-normal text-white">MCA (Master's in Computer Application)</h1>
              <p className="text-white">[2024-26]</p>
              <p className="text-center text-white font-normal px-2">GEHU Bhimtal Uttarkhand</p>
            </div>
          </div>



          {/* BCA */}
          <div className="education-info flex flex-col h-max w-max p-5 justify-center items-center gap-3 max-[455px]:w-5/6 rounded-2xl px-4 bg-gradient-to-r from-pink-500 to-violet-600 shadow-sm shadow-white cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out">

            <div className="logo-div w-32 h-32 border rounded-lg overflow-hidden bg-white mb-2  hover:scale-75 transition-all duration-500 ease-in-out">
              <img
                src={ssjlogo}
                alt="ssjlogo"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="infomation flex flex-col items-center gap-2">
              <h1 className="text-center font-normal text-white">BCA (Bachelor's in Computer Application)</h1>
              <p className="text-white">[2021-24]</p>
              <p className="text-center text-white font-normal px-2">SSJ University Almora Uttarkhand</p>
            </div>
          </div>

          {/* intermidiate */}
          <div className="education-info flex flex-col h-max w-max p-5 justify-center items-center gap-3 max-[455px]:w-5/6 rounded-2xl px-4 bg-gradient-to-r from-pink-500 to-violet-600 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer shadow-sm shadow-white ">

            <div className="logo-div w-32 h-32 border rounded-lg overflow-hidden hover:scale-75 transition-all duration-500 ease-in-out">
              <img
                src={beershebalogo}
                alt="beershebalogo"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="infomation flex flex-col items-center gap-3">
              <h1 className="text-center font-normal text-white">Intermediate</h1>
              <p className="text-white">[2019-21]</p>
              <p className="text-center text-white font-normal">Beersheba School Almora Uttarkhand</p>
            </div>
          </div>

          {/* High school */}
          <div className="education-info  flex flex-col h-max w-max p-5 justify-center items-center gap-3 max-[455px]:w-5/6 rounded-2xl px-4 bg-gradient-to-r from-pink-500 to-violet-600 shadow-sm shadow-white hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
            <div className="logo-div w-32 h-32 border rounded-lg overflow-hidden hover:scale-75 transition-all duration-500 ease-in-out">
              <img
                src={beershebalogo}
                alt="beershebalogo"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="infomation flex flex-col items-center gap-2">
              <h1 className="text-center text-white font-normal">High School</h1>
              <p className="text-white">[2018-19]</p>
              <p className="text-center text-white font-normal">Beersheba School Almora Uttarkhand</p>
            </div>
          </div>


      </div>

      <div className="line absolute right-1/4 h-4/6 w-1 dark:bg-gradient-to-r from-rose-100 to-teal-100 max-[583px]:right-6 bg-[#6C6C6C]">

        <div className="top-ball w-10 h-10 rounded-full bg-gradient-to-r from-green-200 to-blue-500 absolute top-10 -right-5 cursor-pointer hover:scale-75 transition-all duration-500 ease-in-out flex items-center justify-center text-2xl">🏆</div>

        <div className="center-ball w-10 h-10 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300 absolute top-1/2 -right-5 cursor-pointer flex items-center justify-center text-2xl hover:scale-75 transition-all duration-500 ease-in-out">🏆</div>

      
        <div className="top-ball w-10 h-10 rounded-full bg-gradient-to-r from-green-200 to-blue-500 absolute bottom-10 -right-5 cursor-pointer flex items-center justify-center text-2xl hover:scale-75 transition-all duration-500 ease-in-out">🏆</div>

      </div>

    </div>
  );
};

export default Education;
