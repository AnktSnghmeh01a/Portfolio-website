import React from 'react'
import loadingImg from '../../assets/preloader.gif'
const Loading = () => {
  return (
    <div className='w-screen h-screen flex flex-col gap-4 items-center justify-center bg-[#F1F1F1] max-[500px]:gap-2' >

    <div className="loading-image h-2/6 w-2/6">
      
      <img src={loadingImg} alt="loading-animation" className='w-full h-full object-center object-cover'/>
    </div>
    <h1 className='text-xl text-[#36454F] max-[500px]:text-lg'>Loading ...</h1>
    </div>
  )
}

export default Loading