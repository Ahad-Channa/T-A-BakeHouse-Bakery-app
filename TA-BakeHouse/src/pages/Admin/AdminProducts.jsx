import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function AdminProducts() {

  const nav=useNavigate();
  return (
    <>
    <div  className='mt-50 flex justify-center bg-sky-300'>Products will be here</div>
    <button className='bg-gray-400 py-2 px-4 m-5 rounded-lg' onClick={()=>nav("/dashboard")}>Back</button>
    </>
    
  )
}
