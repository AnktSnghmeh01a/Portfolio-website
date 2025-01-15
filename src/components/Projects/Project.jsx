import React from "react";
import { useDarkMode } from "../darkMode/DarkMode.jsx";

const Project = ({ projectName, projectImage, githubLink,liveLink }) => {
  const { dark } = useDarkMode();

  return (
    <div
      className={`w-96 h-96 flex flex-col align-center gap-3 p-3 bg-[#A2A2A2] max-[737px]:m-0 rounded-xl py-5 shadow-sm shadow-white cursor-pointer backdrop-filter backdrop-blur-[10px] border-[1px] border-solid border-[rgba(255,255,255,.25)] max-[737px]:w-80 max-[737px]:h-80 m-5`}
    >
      <div className="image-container w-full h-80 border rounded-xl overflow-hidden">
        <img
          src={projectImage}
          alt="no-image"
          className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>

      <div className="text-part-project w-full">
        <h1 className="text-white text-center font-normal">{projectName}</h1>
      </div>

      {/* buttons */}
      <div className="Source-code-and-live w-full flex justify-around mt-2">
      
      {/* source code */}
        <a href={githubLink} target="_blank">
          <button
            className={`px-14 py-2 rounded-lg text-black  transition-all duration-300 ease-in-out hover:scale-90 font-normal ${
              dark
                ? "bg-gradient-to-r from-slate-300 to-slate-500"
                : "bg-gradient-to-r from-gray-100 to-gray-300"
            }  ${dark ? "text-white" : "text-black"} max-[737px]:px-12`}
          >
            Code
          </button>
        </a>

{/* live link */}
        <a href={liveLink} target="_blank">
          <button
            className={`px-14 py-2 rounded-lg border transition-all duration-300 ease-in-out hover:scale-90 text-white border-white hover:bg-gradient-to-r from-fuchsia-500 to-orange-500 max-[737px]:px-12`}
          >
            Live
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project;
