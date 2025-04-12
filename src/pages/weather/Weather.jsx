import React from 'react'

export default function Weater() {
    const city =[
        {name:'tehran' , lat:'35.7219' , lon:'51.3347'},
        {name:'hamedan' , lat:'34.7983' , lon:'48.5148'},
        {name:'mashhad' , lat:'36.2972' , lon:'59.6067'}
    ]
  return (
    <div>
      <h1>
        
      sallam
      </h1>
      <select>
      {city.map((item)=>(
          
        <option value={JSON.stringify(item)}>{item.name}</option>
        ))}
      </select>
    </div>
  )
}
