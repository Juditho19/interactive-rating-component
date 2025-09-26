import React from 'react'
import { useLocation } from 'react-router-dom'

const Thanks = () => {
  const location = useLocation();
  // get rating from Home.jsx using useLocation hook
  const rating = location.state?.rating; 
  // ?ensures no error if rating is undefined
  
  return (
    <div className='bg-grey-gradient w-full max-w-sm mx-auto 
    rounded-2xl p-6 flex flex-col gap-5 flex flex-col
    items-center justify-center'>
      <img src="../src/assets/images/illustration-thank-you.svg" alt="card-image-icon"
      width={150} height={150} 
      className=''/>
      <p className='text-sm text-Orange bg-darkGrey px-3 
        py-2 text-center rounded-3xl '>
        You selected {rating} out of 5 
      </p>
      <h1 className='text-2xl font-bold'>Thank you!</h1>
      <p className='text-sm text-lightGrey justify-center text-center'>
        We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
      </p>

    </div>
  )
}

export default Thanks