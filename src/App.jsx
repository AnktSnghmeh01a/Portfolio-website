import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import { useDarkMode } from "./components/darkMode/DarkMode.jsx";
import Loading from "./components/loading/Loading.jsx";
import { Toaster } from "react-hot-toast";

const App = () => {

  const {dark} = useDarkMode();
  const [loading,setLoading] = useState(true);
  
  useEffect(()=>{
     
     setTimeout(() => {
      setLoading(false)
     }, 3000); 

  },[])

  
  return (
     loading?<Loading/>:
    <div className={`font-bold w-screen h-screen  overflow-auto 
    `}>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      
      </Router>
     <Toaster/>
    </div>

);
};

export default App;
