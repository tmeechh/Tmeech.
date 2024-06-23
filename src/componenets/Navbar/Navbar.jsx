/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from '@heroicons/react/20/solid';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';

const Navbar = ({ setShowLogin }) => {
  
  const [menu, setMenu] = useState('home');

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token")
    setToken("");
    navigate("/")
  }
  
  
  return (
    <>
      <div className="navbar py-5 px-0 flex justify-between items-center">
       <Link to='/'> <h1 className="logo text-[40px] font-[900] text-[#FFEA00]">Tmeech.</h1> </Link>
        <ul className="navbar-menu flex list-none gap-5 text-[#49557e] text-[18px]">
          <Link
            to='/'
            onClick={() => setMenu('home')}
            className={
              menu === 'home'
                ? 'pb-[2px] border-b-[2px] border-[#49557e]  cursor-pointer '
                : ' cursor-pointer'
            }
          >
            home
          </Link>
          <a
            href='#explore-menu'
            onClick={() => setMenu('menu')}
            className={
              menu === 'menu'
                ? 'pb-[2px] border-b-[2px] border-[#49557e]  cursor-pointer'
                : ' cursor-pointer'
            }
          >
            menu
          </a>
          <a
             href='#app-download'
            onClick={() => setMenu('mobile-app')}
            className={
              menu === 'mobile-app'
                ? 'pb-[2px] border-b-[2px] border-[#49557e] cursor-pointer'
                : ' cursor-pointer'
            }
          >
            mobile-app
          </a>
          <a
             href='#footer'
            onClick={() => setMenu('contact-us')}
            className={
              menu === 'contact-us'
                ? 'pb-[2px] border-b-[2px] border-[#49557e] cursor-pointer'
                : ' cursor-pointer'
            }
          >
            contact us
          </a>
        </ul>
        <div className="navbar-right flex gap-5 justify-center items-center">
          {/* <MagnifyingGlassIcon className=" icon-navbar  h-9 text-[#49557e] cursor-pointer" /> */}
          <div className="navbar-search-icon relative ">
            {/* <img src={assets.basket_icon} alt="" /> */}{' '}
            <Link to='/cart'> <ShoppingBagIcon className="icon-navbar  h-9 text-[#49557e]" /> </Link>
            <div className={getTotalCartAmount()===0?"":"dot absolute min-w-[10px] min-h-[10px] bg-[#FFEA00] rounded-[5px] top-[-5px] right-[-5px]"}></div>
          </div>
          {!token?  <button onClick={()=>setShowLogin(true)} className="transition-[3s]  bg-[transparent] text-[16px] text-[#49557e] py-[10px] px-[30px] rounded-[50px] cursor-pointer border-[1px] divide-solid hover:bg-[#FFF5CC]">
            sign in
          </button> : <div className='navbar-profile relative '>
              <img src={assets.profile_icon} alt="" />
              <ul className="nav-profile-dropdown absolute hidden z-[1] left-[-55px] mt-[2px]">
                <li onClick={()=>navigate('/myorders')} className='flex items-center gap-[10px] cursor-pointer'><img className='w-[20px]' src={assets.bag_icon} alt="" /><p className='hover:text-[#FFEA00]'>Orders</p></li>
                <hr />
                <li onClick={logout} className='flex items-center gap-[10px] cursor-pointer'><ArrowRightStartOnRectangleIcon className='w-[20px]  text-[#FFEA00]'/><p className='hover:text-[#FFEA00]' >Logout</p></li>
              </ul>
          </div>}
        
        </div>
      </div>
    </>
  );
};

export default Navbar;
