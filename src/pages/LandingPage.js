import React from 'react';
import { Link } from 'react-router-dom';
import bg1 from '../images/bg1.webp'; 

const LandingPage = () => {
    return (
        <div className='relative h-screen flex items-center justify-center bg-blue-100'>
            <div className='relative flex flex-col items-center'>
                <img src={bg1} alt='Background' className='object-contain rounded-2xl' />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2'>
                    <Link to='/Login'>
                        <button className='w-60 h-14 border-2 border-white bg-purple-900 bg-opacity-60 text-2xl text-white font-semibold rounded-full hover:font-bold'>
                            START
                        </button>
                    </Link>
                </div>
            </div>
        </div>   
    );
}

export default LandingPage;
