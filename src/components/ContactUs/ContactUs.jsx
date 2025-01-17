import React, { useState } from "react";
import handImg from "../../assets/contactus-assert.webp";
import { useDarkMode } from "../darkMode/DarkMode";
import { sendCustomEmail } from "../Email/EmailJs";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [details, setDetail] = useState({
    name: "",
    eMail: "",
    message: "",
  });

  const handleDetailChange = (event) => {
    const { name, value } = event.target;
    setDetail((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlesendEmail = (event) => {
    event.preventDefault();
    toast.success('Congratulations !! , Message send')
    sendCustomEmail(details);

    setDetail({
      name: "",
      eMail: "",
      message: "",
    });
  };

  const { dark } = useDarkMode();
  return (
    <div
      className={`min-h-full w-full flex ${
        dark
          ? "bg-gradient-to-r from-zinc-900 to-neutral-600"
          : "bg-[#FEFEFA]"
      }  max-[930px]:flex-col  max-[930px]:p-6 p-10`}
      id="contactus"
    >
      {/* left portion */}
      <div className="left-part-contactUs w-1/2 min-h-full relative flex items-center justify-center max-[930px]:w-full max-[930px]:h-1/2 ">

    <div duration={2000} className="image-div-contactus max-[930px]:h-1/2 max-[930px]:w-5/6 rounded-2xl overflow-hidden h-5/6 w-4/6 shadow-sm shadow-white cursor-pointer transition-all duration-700 ease-in-out hover:rotate-45">  <img
            src={handImg}
            alt="image-contact"
            className="h-full w-full object-cover object-top"
          /></div>

       <div className="relative">
        <h1 className="absolute text-7xl text-white -right-20  max-[930px]:text-4xl max-[930px]:-right-3 w-max">
          Contact <span className="text-[#BCBCBC] dark:text-purple-300  max-[930px]:text-4xl">us</span>
        </h1> 
       </div>
       

      </div>

      {/* right portion */}
      <div className="right-part-contactus min-h-full flex justify-end items-center w-1/2 max-[930px]:w-full max-[930px]:justify-center max-[930px]:mt-10">

        <form
          className="p-4 flex justify-center flex-col gap-8 h-1/2 w-5/6 max-[930px]:w-full"
          onSubmit={handlesendEmail}
        >

        
        <div className="name-div flex gap-3 flex-col">
            <label htmlFor="name" className={`text-xl font-normal text-black dark:text-white`}>
              Name:
            </label>
            <input
              type="text"
              className="focus:outline-none rounded-xl pl-2 font-normal w-5/6 max-[930px]:w-full py-1 text-black dark:text-white bg-transparent border-2 border-[#8D9797]"
              placeholder="Enter your name..."
              required
              name="name"
              value={details.name}
              onChange={handleDetailChange}
            />
          </div>    
            
        
         
        <div className="email-div flex gap-2 flex-col">
            <label htmlFor="email" className="text-xl font-normal  text-black dark:text-white">
              Email:
            </label>
            <input
              type="email"
              className="focus:outline-none rounded-xl pl-2 font-normal w-5/6 py-1  max-[930px]:w-full text-black dark:text-white bg-transparent border-2 border-[#8D9797]"
              placeholder="Enter your email..."
              required
              name="eMail"
              value={details.eMail}
              onChange={handleDetailChange}

            />
          </div>      

        
         
          <div className="name-div flex gap-2 flex-col">
            <label htmlFor="message" className="text-xl font-normal  text-black dark:text-white">
              Message:
            </label>

            <textarea
              className="focus:outline-none rounded-xl pl-2 font-normal w-5/6 h-28 max-[930px]:w-full text-black dark:text-white bg-transparent border-2 border-[#8D9797]"
              placeholder="Write Something"
              required
              name="message"
              value={details.message}
              onChange={handleDetailChange}
            ></textarea>
          </div>
       

          <div className="button flex justify-start mt-5 ml-10 max-[930px]:ml-0 max-[930px]:justify-center max-[500px]:w-full">
            <button
              type="submit"

              className="border-2 border-[#8D9797] w-5/6 py-2  rounded-xl text-black dark:text-white transition-all duration-500 ease-in-out text-lg font-normal hover:bg-gradient-to-r from-red-400 to-fuchsia-500 hover:scale-90 cursor-pointer"

            
           >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
