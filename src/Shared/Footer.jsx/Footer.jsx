import React from 'react';
import logo from '../../assets/logo copy.png'
import { Link, NavLink } from 'react-router';
import facebook from '../../assets/facebookpng.png'
import youtube from '../../assets/youtube.png'
import linkedin from '../../assets/linkedIn-png.png'
import twitter from '../../assets/twitter-logo-2 3.png'

const Footer = () => {

     const navbarItems = [
  { id: 1, name: "Services", path: "/services" },
  { id: 2, name: "Coverage", path: "/coverage" },
  { id: 3, name: "About Us", path: "/about" },
  { id: 4, name: "Pricing", path: "/pricing" },
  { id: 5, name: "Be a Rider", path: "/be-a-rider" }
];
const socials = [
  {
    id: "linkedin",
    url: "https://www.linkedin.com",
    icon: linkedin
  },
  {
    id: "x",
    url: "https://x.com",
    icon: twitter
  },
  {
    id: "facebook",
    url: "https://www.facebook.com",
    icon:facebook
  },
  {
    id: "youtube",
    url: "https://www.youtube.com",
    icon: youtube
  }
]

   return (
      <div className='bg-main-black m-10 rounded-2xl'>
         <div className='flex flex-col justify-center items-center text-center max-w-3xl mx-auto pt-12 pb-8 gap-4'>
           <div className='text-primary-white flex items-center text-2xl'>
             <img className='text-primary-white h-10' src={logo} alt="logo" />
             <h1 className='mt-6 -ml-5'>ZapShift</h1>
           </div>
            <p className='text-primary-white'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
           
         </div>
          <div className='border-b border-dashed border-[#03464D] w-[85%] mx-auto'>

            </div>
         <ul className="flex items-center gap-6 mt-3 justify-center py-8">
                  {
                     navbarItems.map((nav) => (
                        <li key={nav.id}>
                           <NavLink to={nav.path}  className={({isActive}) => isActive? " bg-primary-green text-secondary-green px-4 py-3 rounded-4xl font-medium": "text-primary-white"} > {nav.name}</NavLink>
                        </li>
                     ))
                  }
               </ul>
               <div className='border-b border-dashed border-[#03464D] w-[85%] mx-auto'></div>
         <div className='pt-10 pb-20 list-none flex justify-center items-center gap-4'>
               {
                  socials.map((social) => (
                     <li className='list-none flex justify-center items-center' key={social.id}>
                        <Link to ={social.url} target="_blank" rel="noopener noreferrer"><img src={social.icon} alt={social.url} /></Link>
                     </li>
                  ))
               }
         </div>
      </div>
   );
};

export default Footer;