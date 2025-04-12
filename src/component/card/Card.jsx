import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Crad({ articles ,onRemove }) {

    return (
        <div className='flex flex-col justify-center justify-items-center '>
            <div className=" max-w-52 border border-gray-400 rounded overflow-hidden shadow-lg bg-gray-300">
                <img className="size-56 " src={articles.imgurl} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{articles.title} </div>
                    <p className="text-gray-700 text-base">
                        {articles.paragraph}
                    </p>
                </div>
                <div className='flex justify-around'>
                    <Link to={`/articlePage/${articles.id}`}><button className=' bg-blue-500 hover:bg-blue-700 text-white text-sm  py-2 px-2 rounded'>Goo To Ditils</button></Link>
                    <Link ><button onClick={()=>onRemove(articles.id)} className='bg-red-500 hover:bg-red-700 text-white text-sm  py-2 px-2 rounded'>Remove Card</button></Link>
                </div>
            </div>
        </div>
    )
}
