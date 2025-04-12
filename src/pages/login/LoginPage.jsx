import React, { useId, useState } from 'react'
import img from "../../imges/colgate-logo.png"
import { useNavigate } from 'react-router-dom'
import Input from '../../component/input/Input'
import axios from 'axios'

export default function LoginPage() {
  const navigte = useNavigate()
  const [data, setData] = useState(null)
  const [number, setNumber] = useState({
    id:'',
    title:' ',
    paragraph: ' ',
    imgurl: ' '
  })

  const onChangeInput = (e) => {
    setNumber((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // console.log('number' ,number)

  const handelSubmit = (e) => {
    e.preventDefault()
    if(number.length!==''){
      setData(number)
      navigte('/')
      
    }else{
      console.log('چیزی وارد کنید')
      navigte('/loginPage')
    }
  }
  // console.log('data' , data)
  const handelClicl = ()=>{
    axios.post("http://localhost:3000/articles",{
      id:Math.random().toString(36),
      title:number.title ,
      paragraph: number.paragraph,
      imgurl:number.imgurl
    })
  
  }
  return (
    <>
      <div className='flex gap-[20px] flex-col flex-wrap justify-center items-center content-center mt-52 text-right '>
        <div className='border border-gray-400  px-2 rounded-lg'>
          <form className="max-w-sm mx-auto " onSubmit={handelSubmit}>
            <img src={img} className='w-44 ' />
            <div className="mb-3 ">
              <label for="password" className="block mb-2 text-sm  text-gray-900 dark:text-white font-bold" >ورود | ثبت‌ نام</label>
              <div className='text-xs  text-gray-500'>
                <p > سلام!</p>
                <p>
                  <span >
                    لطفا شماره موبایل یا ایمیل خود را وارد کنید
                  </span>
                </p>
              </div>
            </div>
            <div className='flex  flex-col gap-1'>
              <Input handelChang={onChangeInput} name='title' placeholder ='TITLE' />
              <Input handelChang={onChangeInput} name='paragraph' placeholder='PARAGRAPH' />
              <Input handelChang={onChangeInput} name='imgurl' placeholder='IMGURL'/>


            </div>

            <p className='text-xs text-red-600 mt-2'>تمامی فیلد ها باید پر شوند</p>

            <div className='flex flex-row justify-between gap-1 mt-5 '>

              <button
                type='submit'
                className='bg-blue-600 text-xs rounded-lg py-2 text-white w-full'
              >
                ورود
              </button>
              <button
              onClick={handelClicl}
                type='submit'
                className='bg-blue-600 text-xs rounded-lg py-2 text-white w-full'
              >
                ارسال فرم
              </button>
            </div>
            <p className='text-xs my-5'>
              ورود شما به معنای پذیرش شرایط دیجی‌کالاوقوانین حریم‌خصوصیاست
            </p>
          </form>
        </div>
      </div>

    </>
  )
}