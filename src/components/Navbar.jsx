import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { NavLinks } from '../constants';
import { starks, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav 
      className={`
        ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
          to='/'
          className='flex items-center gap-2'
          onClick={() =>{
            setActive()
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={starks} alt="logo" className='w-12 h-1 object-contain' /> */}
          <p className='text-white text-[18px] font-bold cursor-pointer'>Oktay <span>OED</span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {NavLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title
                ? "text-white"
                : "text-secondary"
              } hover:text-white text-[18px]
              font-medium cursor-pointer`}
              onClick={() => 
                setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar