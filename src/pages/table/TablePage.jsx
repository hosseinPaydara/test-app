import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from '../../component/navbar/Navbar'

export default function TablePage() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        axios.get('http://localhost:3000/articles')
            .then((result) => {
                setData(result.data)
                setIsLoading(false)
                // console.log(result.data)
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false)
            })
    }, [])
    
        // const handelDelete=()=>{
        // let remove= data.filter((item)=>{
        //         !item.id==id;

        //     })
        //     setData(remove)
        // }
    return (
        <>
            <NavBar/>
        <div className=' flex gap-[20px] justify-center items-center content-center'>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-60">
                <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                    <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3 text-center">
                                Color
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Edite
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Delelte
                            </th>
                        </tr>
                    </thead>
                    {
                        data.map((dat) => (
                            <tbody>
                                <tr className="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
                                    <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                        {dat.title}
                                    </th>
                                    <td className="px-6 py-4">
                                        {dat.paragraph}
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop
                                    </td>

                                    <td className="px-6 py-4">
                                        <a href="#" class="font-medium text-white hover:underline">Edit</a>
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#"
                                        // onClick={handelDelete}
                                         class="font-medium text-white hover:underline" 
                                         >Delete</a>
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </div>
        </div>
        </>
    )
}

