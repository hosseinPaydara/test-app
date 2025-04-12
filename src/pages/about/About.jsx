import React from 'react'
import NavBar from '../../component/navbar/Navbar'
import img from '../../imges/pexels-pixabay-235985.jpg'
import Footer from '../../component/footer/Footer' 
export default function About() {
  return (
    <>
      <NavBar />
      <img src={img} alt="banner" className='mt-14 mb-6 h-52 w-full ' />
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
      <div className='flex flex-row gap-1 justify-center mb-52'>
        <button  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">click</button>
        <button  className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">remove </button>
        <button  className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded">edit </button>
      </div>
      <footer className='shadow-md  fixed bottom-0 right-0 left-0'>

        <Footer/>
      </footer>
    </>
  )
}

