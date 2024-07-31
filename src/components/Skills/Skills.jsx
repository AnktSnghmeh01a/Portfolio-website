import React from "react";
import {
  programmingLanguages,
  webDevelopmentTechs,
  tools,
} from "../../SkillsData/skillsData.js";
import { useDarkMode } from "../darkMode/DarkMode";
import {  Slide ,Rotate } from "react-awesome-reveal";

const Skills = () => {
  const { dark } = useDarkMode();
  return (
    <div
      className={`w-full min-h-full text-black p-4 flex flex-col gap-16 ${
        dark
          ? "bg-gradient-to-r from-zinc-700 to-slate-900"
          : "bg-gradient-to-r from-violet-600 to-fuchsia-500"
      } pb-12`}
      id="skills"
    >
      <Slide duration={2000}>
        {" "}
        <h1 className={`text-purple-200 text-5xl text-center mt-14`}>
          Skills🛠️
        </h1>{" "}
      </Slide>

      <div className="skills-div flex flex-col w-full min-h-full mt-10 gap-20">
        {/* programming languges */}
        <div className="programming-languages-div flex flex-col w-full min-h-full py-5 gap-12">
          <h2
            className={`
             text-white text-2xl text-center font-normal cursor-pointer`}
          >
            Programming Languages
          </h2>
          <div className="programming-languages-all flex gap-6 w-full justify-center flex-wrap">
            {programmingLanguages.map((Image, index) => {
              return (
                <Rotate duration={2000} cascade damping={0.5} key={index}>
                  <div
                    className={`language w-28 h-28 rounded-full overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:scale-75 border-4 ${
                      dark ? "border-blue-300" : "border-purple-300"
                    } hover:rotate-45`}
                    key={index}
                  >
                    <img
                      src={Image}
                      alt={programmingLanguages[index]}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Rotate>
              );
            })}
          </div>
        </div>

        {/* web development techs*/}
        <div className="web-development-tech-div flex flex-col w-full min-h-full py-5 gap-12">
          <h2
            className={`text-white text-2xl text-center font-normal cursor-pointer`}
          >
            Web Development
          </h2>
          <div className="programming-languages-all flex gap-6 w-full justify-center flex-wrap">
            {webDevelopmentTechs.map((Image, index) => {
              return (     <Rotate duration={2000} cascade damping={0.5} key={index}>
                <div
                  className={`language w-28 h-28 rounded-full overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:scale-75 border-4 ${
                    dark ? "border-blue-300" : "border-purple-300"
                  } hover:rotate-45`}
                  key={index}
                >
                  <img
                    src={Image}
                    alt={webDevelopmentTechs[index]}
                    className="h-full w-full object-cover"
                  />
                </div> </Rotate>
              );
            })}
          </div>
        </div>

        {/* tools */}
        <div className="web-development-tools-div flex flex-col w-full min-h-full py-5 gap-12">
          <h2
            className={`text-white text-2xl text-center font-normal cursor-pointer`}
          >
            Tools
          </h2>
          <div className="programming-languages-all flex gap-6 w-full justify-center flex-wrap">
            {tools.map((Image, index) => {
              return ( <Rotate duration={2000} cascade damping={0.5} key={index}>
   <div
                  className={`language w-28 h-28 rounded-full overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:scale-75 border-4 ${
                    dark ? "border-blue-300" : "border-purple-300"
                  } hover:rotate-45`}
                  key={index}
                >
                  <img
                    src={Image}
                    alt={tools[index]}
                    className="h-full w-full object-cover"
                  />
                </div>                
              </Rotate>
             
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
