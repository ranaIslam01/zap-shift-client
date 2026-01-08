import React from 'react';
import error from '../../assets/error.png'
import Navbar from '../../Shared/Navbar.jsx/Navbar';
import Footer from '../../Shared/Footer.jsx/Footer';
import { Link } from 'react-router';

const Errorpage = () => {
   return (
      <div>
         <Navbar/>
         <div className='flex justify-center items-center flex-col'>
         <img src={error} alt="error image" />
         <Link to="/" className="text-primary-black bg-primary-green cursor-pointer px-5 rounded-2xl py-2 font-medium text-lg border border-[#DADADA]">Go Home</Link>
         </div>
         <Footer/>
      </div>
   );
};

export default Errorpage;