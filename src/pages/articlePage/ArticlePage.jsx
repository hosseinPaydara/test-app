import React, { useEffect, useState } from 'react'
import NavBar from '../../component/navbar/Navbar'
import Footer from '../../component/footer/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export default function ArticlePage() {
  const [art, setArt] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const params = useParams()
  console.log(params.id)
  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`http://localhost:3000/articles/${params.id}`)
      .then((result) => {
        console.log(result.data)
        setArt(result.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }, [])
  return (
    <>
      <NavBar />
      {
        isLoading ? <p>منتطر باشید</p> : (
          <>
            <div className='flex gap-[20px] flex-col flex-wrap justify-center items-center content-center '>
              <div>
                <h1 className='mt-20'>{art.title}</h1>
              </div>
              <div>
                <img src={art.imgurl}  className='max-w-96'/>
              </div>
              <div>
                <p>{art.paragraph}</p>
              </div>
            </div>
          </>
        )
      }
      <div className='fixed bottom-0 right-0 left-0'>
        <Footer />
      </div>
    </>
  )
}

