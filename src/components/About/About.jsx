import React from "react";
import profileImg from "../.././assets/about-assert.jpg";
import { useDarkMode } from "../darkMode/DarkMode.jsx";
import { HashLink } from "react-router-hash-link";

const About = () => {
  const { dark } = useDarkMode();

  return (
    <div
      className={`min-h-full w-full flex flex-col  p-2 py-6 max-[870px]:py-3 ${dark
          ? "bg-gradient-to-r from-zinc-900 to-neutral-600"
          : "bg-[#FEFEFA]"
        }`}
      id="about"
    >
      {/* heading */}


      <h1 className="text-center text-6xl text-black mt-10 max-[870px]:mt-6 dark:text-white max-[870px]:text-4xl">
        Who <span className="dark:text-[#FEFEFA] text-[#6C6C6C]">I am</span>🤔
      </h1>


      <div className="about-content-part flex max-h-full mt-10 p-5 gap-4 max-[870px]:flex-col max-[870px]:justify-center max-[870px]:p-3 max-[870px]:mt-4">

        <div className="left-portion-about w-1/2 max-h-full p-10 max-[870px]:w-full">
          <div className="img-div-home w-full h-full border-black h-3/4 rounded-xl overflow-hidden shadow-xl cursor-pointer">
            <img
              src={profileImg}
              alt="profile-about"
              className="w-full h-full object-cover object-top"
            />
          </div>


        </div>

        <div className="right-portion-about w-3/4 flex flex-col gap-5 p-10 max-[870px]:w-full max-[870px]:p-5  max-[870px]:gap-10">

          <p className="text-lg text-[#878787] font-medium dark:text-white  max-[870px]:text-center">
            Hello👋! I'm Ankit, a BCA [Bachelor's in Computer Application] 💻 graduate currently pursuing an MCA [Master's in Computer Applications] at Graphic Era Hill University, Bhimtal, Uttarakhand, India. I specialize in both front-end and back-end development, creating visually appealing and highly functional websites. With a strong foundation in full-stack development, I am passionate about building responsive and user-friendly applications.

          </p>

          <p className="text-lg text-[#878787] font-medium dark:text-white  max-[870px]:text-center">
          As a continuous learner📖 and tech enthusiast 🕵, I am always exploring new technologies, expanding my knowledge, and staying updated with the latest industry trends.
          </p>

          <p className="text-lg text-[#878787] font-medium dark:text-white  max-[870px]:text-center">
      
          I firmly believe that maintaining a balanced lifestyle enhances creativity and problem-solving skills—qualities that are crucial in the ever-evolving tech industry.
          </p>



          <div className="dive-into-project-button flex justify-center mt-5">
            <HashLink to={"#projects"}>

              <button
                className={`border-2 px-10 py-3 rounded-xl text-lg font-normal  text-black border-black dark:text-white dark:border-white transition-all duration-500 ease-in-out hover:scale-90 max-[737px]:px-8 max-[737px]:py-2`}
              >
                Explore my Work🔍
              </button>


            </HashLink>

          </div>
        </div>
      </div>
    </div>
  );

};

export default About;
