import React, { useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";


import { useDarkMode } from "../darkMode/DarkMode.jsx";

const Header = () => {

  const {dark,toggleDarkMode} = useDarkMode() 

  const [menu, setMenu] = useState(true);

  const showLinksMenu = () => {

    setMenu(!menu);

  };

  return (

    <div
      className = {`navbar w-full h-4 bottom-2 flex justify-between border-none max-[737px]:flex-col max-[737px]:items-start max-[737px]:gap-2 max-[737px]:justify-start dark:bg-gradient-to-r from-slate-800 via-purple-400 to-purple-800 ${menu?'max-[737px]:overflow-hidden':'max-[737px]:overflow-scroll'}  ${menu?'max-[737px]:h-1':'max-[737px]:h-full'} ${!menu?'max-[737px]:bg-gradient-to-r from-orange-400 to-indigo-500':''} fixed top-0 z-50 px-5`}
      id="navbar"
    >
      {/* logo */}
      <div className="logo">
        <p className="navbar-header-logo text-white max-[737px]:absolute top-2 cursor-pointer">Ankit</p>
      </div>

      <div
        className = {`max-[737px]:rounded-none nav-links flex h-full rounded-full max-[737px]:flex-col max-[737px]:h-fit max-[737px]:w-full max-[737px]:mt-28 max-[737px]:mb-10 max-[737px]:items-center max-[737px]:justify-center  max-[737px]:gap-0 ${menu?'max-[737px]:opacity-0':'max-[737px]:opacity-1'} ${menu?'max-[737px]:pointer-events-none':'max-[737px]:pointer-events-all'} 
  `}     
        id="nav-links"
      >
        <a className="rounded-l-2xl font-normal h-full p-3 text-white bg-gradient-to-r from-purple-500 to-pink-500  dark:text-black px-7 dark:hover:bg-slate-200 max-[737px]:bg-white max-[737px]:text-black max-[737px]:w-full max-[737px]:h-13 max-[737px]:text-center max-[737px]:hover:bg-black max-[737px]:hover:text-white dark:max-[737px]:hover:bg-white dark:max-[737px]:hover:text-black max-[737px]:rounded-2xl dark:max-[737px]:bg-black dark:max-[737px]:text-white max-[737px]:pt-2 max-[737px]:gap-2 transition ease-in-out duration-150 cursor-pointer" onClick={()=>showLinksMenu()}>
          Home
        </a>

        <a className="hover:text-white hover:bg-gradient-to-r from-purple-500 to-pink-500 text-white font-normal h-full p-3 px-6 max-[737px]:w-full max-[737px]:hover:bg-black max-[737px]:hover:text-white dark:max-[737px]:hover:bg-white dark:max-[737px]:hover:text-black max-[737px]:text-center max-[737px]:rounded-2xl max-[737px]:pt-2zzzz transition ease-in-out duration-150  cursor-pointer" onClick={()=>showLinksMenu()}>
          About
        </a>

        <a className="hover:text-white hover:bg-gradient-to-r from-purple-500 to-pink-500 text-white font-normal h-full p-3 px-6 max-[737px]:w-full max-[737px]:hover:bg-black max-[737px]:hover:text-white dark:max-[737px]:hover:bg-white dark:max-[737px]:hover:text-black max-[737px]:text-center max-[737px]:rounded-2xl max-[737px]:pt-2 transition ease-in-out duration-150 cursor-pointer" onClick={()=>showLinksMenu()}>
          Projects
        </a>

        <a className="hover:text-white hover:bg-gradient-to-r from-purple-500 to-pink-500 text-white font-normal h-full p-3 px-6 max-[737px]:w-full max-[737px]:hover:bg-black max-[737px]:hover:text-white dark:max-[737px]:hover:bg-white dark:max-[737px]:hover:text-black max-[737px]:text-center max-[737px]:rounded-2xl max-[737px]:pt-2 transition ease-in-out duration-200 rounded-r-2xl cursor-pointer" onClick={()=>showLinksMenu()}>
          Contact Us
        </a>
      </div>

      <div className="colormode-and-button-part flex gap-3 max-[737px]:w-full max-[737px]:justify-center">
        {/* color mode switcher */}
        <div className="color-mode-switcher mr-3 max-[737px]:absolute right-8 top-2">
          <button onClick={() => toggleDarkMode()}>
            {dark ? (
              <IoSunny className="text-2xl text-white " />
            ) : (
              <IoMoon className="text-lg text-black" />
            )}
          </button>
        </div>
        {/* <button className="btn btn-outline">Default</button> */}
        <button className= {`bg-gradient-to-r from-pink-300 via-purple-500 to-purple-800 p-3 rounded-lg px-6 text-white hover:from-pink-500 hover:to-yellow-500 ${menu?'max-[737px]:opacity-0':'max-[737px]:opacity-1'} ${menu?'max-[737px]:pointer-events-none':'max-[737px]:pointer-events-all'}
        ${menu?'max-[737px]:hidden':'max-[737px]:block'}
        `} onClick={()=>showLinksMenu()}>Download CV</button>
      </div>

      <div className="hamburger-and-remove absolute right-3 pointer-events-none opacity-0 max-[737px]:opacity-100  max-[737px]:pointer-events-auto">
        {menu ? (
          <CiMenuFries
            className="dark:text-white text-black text-2xl cursor-pointer"
            onClick={() => showLinksMenu()}
          />
        ) : (
          <RxCross1
            className="dark:text-white text-black text-2xl cursor-pointer font-bold"
            onClick={() => showLinksMenu()}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
