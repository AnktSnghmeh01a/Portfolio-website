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
import { Fade, Flip, Bounce } from "react-awesome-reveal";
const Home = () => {
  const { dark, toggleDarkMode } = useDarkMode();

  return (
    <>
      <div
        className={`w-full min-h-full flex ${
          dark
            ? "bg-gradient-to-r from-zinc-700 to-slate-900"
            : "bg-gradient-to-r from-indigo-600 to-fuchsia-500"
        } p-3 max-[737px]:flex-col-reverse max-[737px]:justify-items-center pt-20 overflow-hidden`}
        id="home"
      >
        {/* left-portion-home */}
        <div className="left-portion-home  w-1/2 flex flex-col p-10 gap-16 max-[737px]:w-full">
          <div className="text-portion-home flex flex-col pt-20 gap-3 max-[737px]:pt-5 max-[737px]:justify-items-center">
            <Fade cascade>
              <h1 className="text-white text-4xl">
                Hello ,
                <span className="text-purple-300 dark:text-gray-200">
                  I am
                </span>
              </h1>
              <h1 className="text-white text-5xl max-[737px]:text-4xl dark:text-white max-[737px]:dark:text-white max-[737px]:font-medium ">
                Ankit Singh Mehra
              </h1>
            </Fade>

            <div className="mt-3 typing-text-home" id="typing-text-home">
              <p
                className="text-3xl text-white max-[737px]:text-2xl bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg"
                id="home-text-1"
              >
                Front-End Developer
              </p>
              <p
                className="text-white text-3xl max-[737px]:text-2xl bg-gradient-to-r from-violet-500 to-zinc-400 rounded-lg"
                id="home-text-2"
              >
                Full-Stack Developer
              </p>
            </div>
          </div>

          {/* buttons */}
          <div className="buttons-home flex gap-4">
            <HashLink to={"#contactus"}>
              {" "}
              <button className="bg-gradient-to-r from-pink-300 via-purple-500 to-purple-800 p-3 rounded-lg px-10 text-white hover:from-pink-500 hover:to-yellow-500 max-[737px]:px-4 hover:scale-90 transition-all duration-500 ease-in-out">
                Contact me
              </button>
            </HashLink>

            <HashLink to={"#about"}>
              <button className="border-2 border-purple-400 p-3 rounded-lg text-white font-normal px-10 hover:bg-gradient-to-r from-purple-500 to-pink-500 max-[737px]:px-4 hover:scale-90 transition-all duration-500 ease-in-out">
                About me
              </button>
            </HashLink>
          </div>
        </div>

        {/* right portion */}
        <div className="right-portion-home w-1/2 relative max-[737px]:w-full max-[737px]:flex max-[737px]:justify-items-center max-[737px]:items-center max-[737px]:p-2 z-20">
          <div className="side-balls-1 rounded-full w-20 h-20  absolute -left-7 top-10 bg-gradient-to-r from-violet-600 to-red-400 max-[737px]:-top-2 max-[737px]:-left-3 max-[737px]:h-12 max-[737px]:w-12"></div>

          <Bounce duration={2000}>
            <div className="img-div-home rounded-3xl overflow-hidden mt-20 z-30 h-11/12 w-10/12 max-[737px]:mt-0 max-[737px]:w-full relative shadow-sm shadow-black dark:shadow-white hover:scale-90 transition-all duration-500 ease-in-out cursor-pointer">
              <img src={img} alt="home-img" className="w-full h-full" />
            </div>
          </Bounce>
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
