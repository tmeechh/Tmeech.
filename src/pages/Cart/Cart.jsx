import { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <>
      <div className="cart mt-[100px]">
        <div className="cart-items">
          <div className="cart-items-title cart-items-four  grid grid-cols-[1fr,1.3fr,1fr,1fr,1fr,0.5fr] items-center text-gray-500 text-[max(1vw,12px)]">
            <p className="">Items</p>
            <p className="">Title</p>
            <p className="md:ml-[12px]">Price</p>
            <p className="">Quantity</p>
            <p className="">Total</p>
            <p className="">Remove</p>
          </div>
          <br className="" />
          <hr className="h-[1.4px]  bg-[#e2e2e2] border-none" />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <>
                  <div
                    key={index}
                    className="cart-items-title cart-items-item grid grid-cols-[1fr,1.5fr,1fr,1fr,1fr,0.5fr] items-center  text-[max(1vw,12px)] my-[10px] mx-0 text-black"
                  >
                    <img className="w-[50px]" src={url+"/images/"+item.image} alt="" />
                    <p className="">{item.name}</p>
                    <p className="">${item.price}</p>
                    <p className="">{cartItems[item._id]}</p>
                    <p className="">${item.price * cartItems[item._id]}</p>
                    <p onClick={()=>removeFromCart(item._id)} className="cross cursor-pointer">X</p>
                  </div>
                  <hr className="h-[1.3px] bg-[#e2e2e2] border-none" />
                </>
              );
            }
          })}
        </div>
        <div className="cart-bottom flex justify-between mt-[80px] gap-[max(12vw,20px)]">
          <div className="cart-total flex flex-1 flex-col gap-[20px]">
            <h2 className='font-[900] text-[20px]'>Cart Total</h2>
            <div>
              <div className="cart-total-details flex justify-between text-[#555] ">
               <p className=''>Subtotal</p>
                <p className=''>${getTotalCartAmount()}</p>
              </div>
              <hr className='my-[10px] mx-0'/>
              <div className="cart-total-details flex justify-between text-[#555]">
                   <p className="">Delivery Fee</p>
                <p className="">${getTotalCartAmount() === 0?0:5}</p>
              </div>
              <hr className='my-[10px] mx-0'/>
              <div className="cart-total-details flex justify-between text-[#555]">
                <b>Total</b>
                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+5}</b>
              </div>
            </div>
            <button onClick={()=>navigate('/order')} className='border-none text-white bg-[#FFEA00] w-[max(15vw,250px)] py-[12px] px-0 rounded-[20px] cursor-pointer' >PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode flex-1 ">
            <div className="">
              <p className='text-[#555]'>If you have a promo code, Enter it here</p>
              <div className="cart-promocode-input mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[20px]">
                <input className='outline-none border-none pl-[10px] bg-transparent' type="text" placeholder='promo code' />
                <button className="w-[max(10vw,150px)] py-[12px] px-[5px] bg-black border-none text-white rounded-[20px]">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
