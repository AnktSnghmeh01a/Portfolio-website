import React from 'react'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'

const App = () => {
  return (
    <div className='font-bold w-screen h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-500 overflow-auto'>
    
     <Header/>

     <Home/>

    </div>
  )
}

export default App