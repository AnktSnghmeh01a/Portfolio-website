import React, { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark(!dark);
    document.body.classList.toggle("dark", !dark);
  };

  return (
    <DarkModeContext.Provider value={{ dark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () =>{

  return useContext(DarkModeContext);

}