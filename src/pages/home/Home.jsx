import React, { useEffect, useState } from 'react'
import Navbar from '../../component/navbar/Navbar'
import Card from '../../component/card/Card'
import Footer from '../../component/footer/Footer'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loading from '../../component/loading/Loading'
export default function Home() {
  const [articl, setArticle] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    axios.get("http://localhost:3000/articles")
      .then((result) => {
        setArticle(result.data)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error)
      })
  }, [])
  const onRemove=(id)=>{
    setArticle(prev=>prev.filter(item=>item.id !==id))
    console.log(articl)
  }
  
  return (
    < >
      <Navbar />
      <h1 className='text-slate-500 text-right container font-bold mt-20 mb-2'>مقاله</h1>
      <div className='container mx-auto '>
        {
          isLoading ? <Loading /> : (
            <>
              <div className='flex flex-row justify-center flex-wrap gap-x-32 gap-y-5'>
                {
                  articl.map((article) => (

                    // <Link to={`/articlePage/${article.id}`}>
                      <Card key={article.id} articles={article} onRemove={onRemove}/>
                    // </Link>
                  ))
                }
              </div>
            </>
          )
        }
      </div>
      <footer className='shadow-md mt-2 fixed bottom-0 right-0 left-0'>
        <Footer />
      </footer>
    </>
  )
}

