
import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  
  const navigate = useNavigate();


  const handleClick = () => {
    navigate('/list-cards');
  }

  return (
    <div className='min-h-screen flex flex-col'>
     
      {/* Explore Button */}

      <div className='flex-grow flex items-center justify-center'>
        <button
        onClick={handleClick}
        className='bg-orange-300 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-xl text-lg transition duration-300'
        >
          Explore more!
        </button>
      </div>
    </div>
  );
}

export default HomePage
