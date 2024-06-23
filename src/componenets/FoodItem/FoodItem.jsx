/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext} from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {

    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <>
      <div className="food-item w-[100%] m-[auto] rounded-[15px] ">
        <div className="food-item-img-container relative ">
        <img className="food-item-image w-[100%] h-fit" src={url+"/images/"+image} alt="" />
                  {!cartItems[id]
                      ?  <div  onClick={() => addToCart(id)} className=' absolute bottom-[15px] right-[15px] rounded-[50%] bg-white cursor-pointer w-[35px] h-[35px] flex items-center justify-center'> <PlusIcon className='add h-5 w-5'/> </div>
                      : <div className='food-item-counter absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white bg-opacity-50 backdrop-blur-sm'>
                          <div onClick={()=>removeFromCart(id)} className='cursor-pointer rounded-[50%] w-[35px] h-[35px] flex items-center justify-center bg-red-100'>
                          <MinusIcon  className='w-[30px] h-5  text-red-500' />
                          </div>
                          <p >{cartItems[id]}</p>
                          <div  onClick={()=>addToCart(id)} className='cursor-pointer bg-green-100  rounded-[100%] w-[35px] h-[35px] flex items-center justify-center'>
                          <PlusIcon className='h-8 w-[30px]  p-[5px]  text-green-500  rounded-[50%] ' />
                          </div>
                      </div>
                }
        </div>
        <div className="food-item-info p-[20px]">
          <div className="food-item-name-rating flex justify-between items-center mb-[10px]">
            <p className='text-[20px] font-[500] '>{name}</p>
            <img className='w-[70px]' src={assets.rating_stars} alt="" />
          </div>
          <p className="food-item-description text-[#676767] text-[12px] ">{description}</p>
          <p className="food-item-price text-[#FFEA00] text-[22px] font-[500] my-[10px] mx-0">${price}</p>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
