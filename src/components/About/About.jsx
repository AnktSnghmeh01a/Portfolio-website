import React from "react";
import profileImg from "../.././assets/about-assert.jpeg";
import { useDarkMode } from "../darkMode/DarkMode.jsx";
import { HashLink } from "react-router-hash-link";
import { Fade,Slide,Roll} from "react-awesome-reveal";

const About = () => {
  const { dark } = useDarkMode();
  return (
    <div
      className={`min-h-full w-full flex flex-col  p-2 py-6 max-[870px]:py-3 ${
        dark
          ? "bg-gradient-to-r from-zinc-900 to-neutral-600"
          : "bg-gradient-to-r from-blue-600 to-fuchsia-600"
      }`}
      id="about"
    >
      {/* heading */}
     <Slide duration={2000}>
       <h1 className="text-center text-6xl text-purple-500 mt-10 max-[870px]:mt-6 dark:text-purple-200 max-[870px]:text-4xl">
        Who <span className="text-white">I am</span>🤔
      </h1> 
     </Slide>
    

      <div className="about-content-part flex max-h-full mt-10 p-5 gap-4 max-[870px]:flex-col max-[870px]:justify-center max-[870px]:p-3 max-[870px]:mt-4">

        <div className="left-portion-about w-1/2 max-h-full p-10 max-[870px]:w-full">
          <Roll duration={2000}>
            <div className="img-div-home w-full border-black h-3/4 rounded-xl overflow-hidden shadow-xl cursor-pointer">
            <img
              src={profileImg}
              alt="profile-about"
              className="w-full h-full object-cover object-top"
            />
          </div>    
          </Roll>
      
        </div>

        <div className="right-portion-about w-3/4 flex flex-col gap-5 p-10 max-[870px]:w-full max-[870px]:p-5  max-[870px]:gap-10">
     
        <Fade cascade damping={0.5} duration={1000}>
               <p className="text-lg text-purple-200 font-medium dark:text-white  max-[870px]:text-center">
            Hello👋! I'm Ankit, a BCA [Bachelor's in Computer Application] 💻
            graduate living in Uttarakhand, India. I specialize in both
            front-end and back-end development , creating visually attractive
            and highly functional websites. With a strong foundation in
            full-stack development, I have a passion for building responsive and
            user-friendly applications.
          </p>

          <p className="text-lg text-purple-100 font-medium dark:text-white  max-[870px]:text-center">
            I'm a continuous learner📖 and a tech explorer 🕵, always seeking to
            expand my knowledge and stay updated with the latest industry
            trends.
          </p>

          <p className="text-lg text-purple-200 font-medium dark:text-white  max-[870px]:text-center">
            In my free time, I enjoy keeping fit with workouts🏋 and challenging
            myself with some strategic chess moves♟️. I believe that a balanced
            lifestyle enhances creativity and problem-solving skills, which are
            crucial in the tech industry.
          </p>

        </Fade>
     
          <div className="dive-into-project-button flex justify-center mt-5">
          <HashLink to={"#projects"}>
       <Roll duration={2000}>
                 <button
              className={`border px-10 py-3 rounded-xl text-lg font-normal text-white border-white transition-all duration-500 ease-in-out hover:bg-gradient-to-r from-red-400 to-fuchsia-500 hover:scale-90 max-[737px]:px-8 max-[737px]:py-2`}
            >
              Explore my Work🔍
            </button>
       </Roll>
          
          </HashLink>
     
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
