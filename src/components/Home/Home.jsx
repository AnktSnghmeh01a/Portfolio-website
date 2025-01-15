import React from "react";
import { useDarkMode } from "../darkMode/DarkMode.jsx";
import img from "../.././assets/home-assert.webp";
import About from "../About/About.jsx";
import ContactUs from "../ContactUs/ContactUs.jsx";
import Footer from "../Footer/Footer.jsx";
import Skills from "../Skills/Skills.jsx";
import Projects from "../Projects/Projects.jsx";
import { HashLink } from "react-router-hash-link";
import Education from "../Education/Education.jsx";
import CustomCursor from "../customCursor/CustomCursor.jsx";
const Home = () => {
  const { dark } = useDarkMode();

  return (
    <>
      <div
        className={`w-full min-h-full flex ${
          dark
            ? "bg-gradient-to-r from-zinc-700 to-slate-900"
            : "bg-[#EBEBEB]"
        } p-3 max-[737px]:flex-col-reverse max-[737px]:justify-items-center pt-20 overflow-hidden relative  max-[737px]:pb-10`}
        id="home"
      >
        <CustomCursor/>
     
        {/* left-portion-home */}
        <div className="left-portion-home  w-1/2 flex flex-col p-10 gap-16 max-[737px]:w-full max-[737px]:p-4 max-[737px]:items-center">
          <div className="text-portion-home flex flex-col pt-20 gap-3 max-[737px]:pt-5 max-[737px]:justify-items-center max-[737px]:w-full">

              <h1 className="text-[#36454F]  text-5xl dark:text-white">
                Hello ,
                <span className="text-[#808080] dark:text-[#F9F6EE] border-black">
                  I am
                </span>
              </h1>
              <h1 className="text-[#36454F] text-5xl max-[737px]:text-4xl max-[400px]:text-3xl dark:text-white max-[737px]:dark:text-white max-[737px]:font-medium ">
                Ankit Singh Mehra
              </h1>


            <div className="mt-4 typing-text-home" id="typing-text-home">
              <p
                className=" text-white bg-[#000000]  max-[737px]:text-xl  
             rounded-lg text-3xl"
                id="home-text-1"
              >
                Front-End Developer
              </p>
              <p
                className="text-white text-3xl max-[737px]:text-xl bg-[#000000] rounded-lg"
                id="home-text-2"
              >
                Full-Stack Developer
              </p>
            </div>
          </div>

          {/* buttons */}
          <div className="buttons-home flex gap-4 max-[737px]:gap-6 max-[737px]:w-full ">
            <HashLink to={"#contactus"}>
              <button className="bg-[#000000]  p-3 rounded-lg px-10 text-white 
              max-[737px]:px-4 hover:scale-90 transition-all duration-500 ease-in-out dark:bg-[#FAF9F6] dark:text-black">
                Contact me
              </button>
            </HashLink>

            <HashLink to={"#about"}>
              <button className="border-2 border-[#000000] dark:border-[#FAF9F6] p-3 rounded-lg text-[#000000] font-normal px-10
               max-[737px]:px-4  hover:scale-90 transition-all duration-500 ease-in-out dark:text-[#FAF9F6]">
                About me
              </button>
            </HashLink>
          </div>
        </div>

        {/* right portion */}
        <div className="right-portion-home w-1/2 relative max-[737px]:w-full max-[737px]:flex max-[737px]:justify-items-center max-[737px]:items-center max-[737px]:p-2 z-20">
          <div className="side-balls-1 rounded-full w-20 h-20  absolute -left-7 top-10 bg-gradient-to-r from-violet-600 to-red-400 max-[737px]:-top-2 max-[737px]:-left-3 max-[737px]:h-12 max-[737px]:w-12"></div>


            <div className="img-div-home rounded-3xl overflow-hidden mt-20 z-30 h-11/12 w-10/12 max-[737px]:mt-0 max-[737px]:w-full relative shadow-sm shadow-black dark:shadow-white hover:scale-90 transition-all duration-500 ease-in-out cursor-pointer">
              <img src={img} alt="home-img" className="w-full h-full" />
            </div>

        </div>
      </div>
      <About />
      <Education />
      <Projects />
      <Skills />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
