import React from 'react'
import NavBar from '../../component/navbar/Navbar'
import img from '../../imges/pexels-pixabay-235985.jpg'
import Footer from '../../component/footer/Footer' 
export default function About() {
  return (
    <>
      <NavBar />
      <img src={img} alt="banner" className='mt-14 mb-6 h-80 w-full ' />
      <h1 className='font-bold text-4xl text-center'>ABOUT</h1>
      <div className='flex justify-center  mt-10'>
        <h2 className='text-center sm:max-w-md md:max-w-lg mb-10 font-bold'> Est optio voluptatum veniam doloremque velit sunt dignissimos praesentium illum, mollitia natus in sit</h2>
      </div>
      <div className='flex flex-row justify-center  gap-96 p-2'>
        <p className='text-left'>ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          quae et consectetur numquam aliquam similique? Quam hic quod ad quos,
          omnis accusantium nostrum velit nisi reiciendis officia ut laboriosam
           earum dolor sit amet consectetur adipisicing elit.Dolor,
          quae et consectetur numquam aliquam similique ? Quam hic quod ad quos,</p>
        <p className='text-center'>Lipsum dolor sit amet consectetur adipisicing elit. Dolor,
          quae et consectetur numquam aliquam similique? Quam hic quod ad quos,
          omnis accusantium nostrum velit nisi reiciendis officia ut laboriosam earum ut laboriosam earum.
          omnis accusantium nostrum velit nisi
          reiciendis officia ut laboriosam earum ut laboriosam
          earum.mquam aliquam similique? Quam hic quod ad quos,</p>
        <p className='text-right'>dolor sit amet consectetur adipisicing elit. Dolor,
          quae et consectetur numquam aliquam similique? Quam hic quod ad quos,
          omnis accusantium nostrum velit nisi reiciendis officia ut laboriosam earum ut laboriosam earum.
          omnis accusantium nostrum velit nisi
          reiciendis officia ut laboriosam earum ut laboriosam
          earum.mquam aliquam similique? Quam hic quod </p>
      </div>
      <div>
        <button  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">click</button>
        <Footer/>
      </div>
    </>
  )
}

