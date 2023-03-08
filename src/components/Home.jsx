import React from 'react'
import Nav from './navigation/Nav'
function Home() {
  return (
    <div className=' home w-full relative  h-[100vh] flex justify-center items-center gap-5'>
      <div className='absolute bg-white left-0 '>

      <Nav/>
      </div>

<div className='bg-[#ffc75f] flex items-center justify-start  w-full h-full'>
  <div>

  <h1 className='home-title capitalize bold  p-9 sm:w-[30vh]'>piga. luku. Baridi.</h1>
  <div className='hidden'>
    <img  className='opacity-1' src="src/assets/bikenstock/yellow.png" alt="" />
  </div>

  <div>
    <button className='bg-black text-white p-4 ml-9 font-bold  text-1xl duration-500 ease-out hover:bg-[#f9f871] hover:text-black'>Cheki Mali</button>
  </div>
  </div>
  
</div>
     
    </div>
  )
}

export default Home