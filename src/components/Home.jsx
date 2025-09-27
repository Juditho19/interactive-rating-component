import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const [rating, setRating] = React.useState(null);
  const navigate = useNavigate();
  // navigate to thanks page when submit button is clicked

  const handleSubmit = () => {
    if (rating) {
      navigate('/thanks', { state: { rating } });
    }
  };

  // when button is clicked, change its color
  const getButtonStyle = (buttonNumber) => {
    if (rating === buttonNumber) {
      return 'bg-White text-darkerGrey';
    }
    return 'bg-darkGrey hover:bg-Orange hover:text-darkerGrey '; 
  };
  

  return (
    
    <div className='bg-grey-gradient w-full max-w-sm  
    sm:max-w-sm mx-auto rounded-2xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-5'>
      <img src="../src/assets/icon-star.svg" alt="star-icon"
      width={30} height={30}
      className='bg-darkGrey rounded-full p-2' />
      <h1 className='text-2xl font-bold'>How did we do?</h1>
      <p className='text-sm text-lightGrey'>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
      </p>

      {/* row of buttons */}
      <div className='flex justify-between flex-wrap gap-3 sm:gap-2'>
        <button
          className={`w-12 h-12 rounded-full cursor-pointer ${getButtonStyle(1)}`}
          onClick={() => setRating(1)}
        >
          1
        </button>

        <button
          className={`w-12 h-12 rounded-full cursor-pointer ${getButtonStyle(2)}`}
          onClick={() => setRating(2)}
        >
          2
        </button>

        <button
          className={`w-12 h-12 rounded-full cursor-pointer ${getButtonStyle(3)}`}
          onClick={() => setRating(3)}
        >
          3
        </button>

        <button
          className={`w-12 h-12 rounded-full cursor-pointer ${getButtonStyle(4)}`}
          onClick={() => setRating(4)}
        >
          4
        </button>

        <button
          className={`w-12 h-12 rounded-full cursor-pointer ${getButtonStyle(5)}`}
          onClick={() => setRating(5)}
        >
          5
        </button>
      </div>
      <button 
        onClick={handleSubmit} 
        className='bg-Orange text-darkerGrey px-2 
        py-2 text-center rounded-3xl font-bold hover:bg-White 
        cursor-pointer text-sm'
        disabled={!rating}>
        {/* disable if no rating selected */}
        SUBMIT
      </button>

      



    </div>
    


  )
}


export default Home