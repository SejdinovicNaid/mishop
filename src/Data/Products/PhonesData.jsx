import React from 'react'

function PhonesData({name, price, button, img}) {
  return (
    <div className='rounded-xl w-[300px] h-[400px] mt-32  bg-gradient-to-r from-black to-gray-300 ml-8'>
    
      <h1  className='text-center text-2xl  pt-6  font-bold'>{name}</h1>
      <h2 className='text-lg text-center  font-semibold '>${price}</h2>
      <button className=' bg-gradient-to-r from-black to-transparent w-28 font-bold text-[#f42b03] rounded-md ml-24'>{button}</button>
      <img className='w-60   ml-7 mt-7' src={img}  />
    </div>
  )
}





export default PhonesData
