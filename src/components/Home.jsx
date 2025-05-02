
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();


  const handleClick = () => {
    navigate('/list-pokemons');
  }

  return (
    <div className="min-h-screen flex flex-col">

      <div className='flex-grow flex items-center justify-center rounded-lg'>
        <button
          onClick={handleClick}
          className='bg-orange-300 hover:bg-orange-500  hover:shadow-lg hover:scale-115 transition duration-600 transform cursor-pointer text-white font-bold py-3 px-6 rounded-xl text-lg transition duration-300'
        >
          Explore more!
        </button>
      </div>
    </div>
  );
}

export default Home;
